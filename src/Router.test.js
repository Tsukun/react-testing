import { screen, render } from "@testing-library/react"
import React from "react";
import { MemoryRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event';
import App from "./App";


describe('Router', () => {
    test("Router test", async () => {
        render(
            <MemoryRouter><App /></MemoryRouter>);
        const user = userEvent.setup();
        const mainLink = screen.getByTestId("main-link");
        const aboutLink = screen.getByTestId("about-link");

        await user.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        await user.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test("Error page test", async () => {
        render(
            <MemoryRouter initialEntries={['/asdasd']}><App /></MemoryRouter>);
        expect(screen.getByTestId('error-page')).toBeInTheDocument();

    });
});