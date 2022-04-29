import { PrivateRoute } from "../../routers/PrivateRoute";
import { mount } from 'enzyme'
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../components/auth/AuthContext";

const mockSpan = <span>Not authenticated, log in</span>

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => mockSpan
}))

describe('test on PrivateRoute', () => {

    Storage.prototype.setItem = jest.fn();

    test('should show the component if the user is authenticated', () => {
        const value = {
            user: {
                logged: true,
                name: 'Tayra'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={value}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Pirvate Route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        console.log(wrapper.html());

        expect(wrapper.text().trim()).toBe('Pirvate Route');
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
    });

    test('should block the component if the user isn authenticated', () => {

        const value = {
            user: {
                logged: false
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={value}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Pirvate Route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        console.log(wrapper.html());

        expect(wrapper.text().trim()).toBe('Not authenticated, log in');


    });




});
