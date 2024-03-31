import { createReduxStore } from "../../store/store"
import {Provider} from 'react-redux'
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"
import AppRouter from "../../router/AppRouter"

export const renderTestApp = (component, options) => {
    const store = createReduxStore(options.initialState);

    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[options.initialRoute]}>
                <AppRouter />
                {component}
            </MemoryRouter>
        </Provider>
    )
}