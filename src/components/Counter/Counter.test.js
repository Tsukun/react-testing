import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Counter from "./Counter";
import {Provider} from 'react-redux';
import { createReduxStore } from "../../store/store";
import { renderWithRedux } from "../../shared/helpers/renderWithRedux";
import { renderTestApp } from "../../shared/helpers/renderTestApp";


describe('getCounterValue', ()=>{
    test('test counter component', async ()=>{
      // Можно и так но ESlint ругаться
      // const {getByTestId} = render(<Counter/>)
        // renderWithRedux(<Counter/> , 
        // {
        //     counter: 
        //     {
        //         value: 10
        //     }})
        renderTestApp(<Counter/>, {
            initialRoute: '/users', // Рандомный другой путь, потому что дублирует Counter компонент
            initialState: {
                counter: {value: 10}
            }
        })
        const user = userEvent.setup();
        const incrementBtn = screen.getByTestId('increment-btn')
        const decrementBtn = screen.getByTestId('decrement-btn')

        expect(screen.getByTestId("value-title")).toHaveTextContent('10')
        await user.click(incrementBtn);
        expect(screen.getByTestId("value-title")).toHaveTextContent('11')
    })

   
})