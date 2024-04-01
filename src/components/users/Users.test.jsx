/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import {userEvent} from '@testing-library/user-event'
import  Users  from "./Users"
import { renderWithRouter } from '../../shared/helpers/renderWithRouter'
import axios from "axios"


jest.mock('axios')

describe('users', () => {
    let response;
    beforeEach(() => {
        response = {
            data:
                [{

                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                }
                ]
        }

    })
    afterEach(()=>{
        jest.clearAllMocks()
    })
    test('fetch users', async () => {
        axios.get.mockReturnValue(response);
        render( renderWithRouter(<Users/>));
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3);
        expect(axios.get).toHaveBeenCalledTimes(1)
        screen.debug()

    })

     test('test redirect to detail page', async () => {
        axios.get.mockReturnValue(response);
        // Некрасивое решение 
        // render( 
        //     <MemoryRouter initialEntries={['/users']}>
        //         <Routes>
        //             <Route  path='/users' element={<Users/>}/>
        //             <Route  path='/users/:id' element={<UsersDetailsPage/>}/>
        //         </Routes>
        //     </MemoryRouter>
        // );
        // Лучше но не совсем
        // render( 
        //     <MemoryRouter>
        //         <AppRouter/>
        //         <Users />
        //     </MemoryRouter>
        // );
        // Самое то 
        render(
            renderWithRouter(<Users/>)
        )
        const user = userEvent.setup()
        const users = await screen.findAllByTestId('user-item')
        await user.click(users[0])
        expect(screen.getByTestId('user-page')).toBeInTheDocument()

    })
})