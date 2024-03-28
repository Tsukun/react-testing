/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('TEST APP', ()=>{
  test('input style helo world elem', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/Hello world/i)
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot()


  });
  
  test('renders', async () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/H world/i)
    // expect(helloWorldElem).toBeNull()

    //Работает с асинхронным кодом
    const helloWorldElem = await screen.findByText(/data/i)
    expect(helloWorldElem).toBeInTheDocument()
    expect(helloWorldElem).toHaveStyle({color: 'red'})


  });

  test('btn click', async () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn')
    // Специально query чтобы показать что элемента нет - null
    // const toggleDiv = screen.queryByTestId('toggle')

    expect( screen.queryByTestId('toggle')).toBeNull()
    fireEvent.click(btn)
    expect( screen.getByTestId('toggle')).toBeInTheDocument()
    fireEvent.click(btn)
    expect( screen.queryByTestId('toggle')).toBeNull()

  });

  test('input event', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i)
    expect( screen.queryByTestId('value-elem')).toContainHTML('')
    // Искуственное событие
    fireEvent.input(input, {
      target: {
        value: '123123'
      }
    })
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123')

  });

  test('user input event', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i)
    expect( screen.queryByTestId('value-elem')).toContainHTML('')
     // Искуственное событие
    //  fireEvent.input(input, {
    //   target: {
    //     value: '123123'
    //   }
    // })
    // Близко к пользователю, обрабатываются события нажатия клавиш и тд
    userEvent.type(input, '123123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123')

  });
})

