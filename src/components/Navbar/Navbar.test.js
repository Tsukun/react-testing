/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react"
import {userEvent} from '@testing-library/user-event';
import { renderWithRouter } from '../../shared/helpers/renderWithRouter'
import Navbar from "./Navbar"


describe('Navbar', () => {
    test('3 links', async () => {
        // Плохой тест так как тестируется сразу 3 ссылки лучше разделить на 3 разных теста
        render(renderWithRouter(<Navbar/>))
        const user = userEvent.setup()
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link'); 
        const usersLink = screen.getByTestId('users-link'); 
        await user.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        await user.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
        await user.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    })

    test('main link', async () => {
        // Плохой тест так как тестируется сразу 3 ссылки лучше разделить на 3 разных теста
        render(renderWithRouter(<Navbar/>))
        const user = userEvent.setup()
        const mainLink = screen.getByTestId('main-link');
        
        await user.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();

    })

    test('about link', async () => {
        // Плохой тест так как тестируется сразу 3 ссылки лучше разделить на 3 разных теста
        render(renderWithRouter(<Navbar/>))
        const user = userEvent.setup()
       
        const aboutLink = screen.getByTestId('about-link'); 

        await user.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();

    })

    test('users link', async () => {
        // Плохой тест так как тестируется сразу 3 ссылки лучше разделить на 3 разных теста
        render(renderWithRouter(<Navbar/>))
        const user = userEvent.setup()
       
        const usersLink = screen.getByTestId('users-link'); 
        await user.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    })

})