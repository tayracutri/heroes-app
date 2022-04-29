import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../components/auth/AuthContext";
import { LoginScreen } from "../../components/login/LoginScreen";
import { types } from "../../components/types/types";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

const value = {
    dispatch: jest.fn(),
    type: types.login,
    payload: {
        name: 'Tayra'
    }
};

describe('test on LoginScreen', () => {
    const wrapper = mount(
        <AuthContext.Provider value={value}>
            <MemoryRouter initialEntries={['/login']}>
                <LoginScreen />
            </MemoryRouter>
        </AuthContext.Provider>
    );


    test('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('should do the dispatch and the navigate', () => {

        wrapper.find('button').simulate('click');
        expect(value.dispatch).toHaveBeenCalledWith({ "payload": { "name": "Tayra" }, "type": types.login });

        expect(mockNavigate).toHaveBeenCalledWith("/", { "replace": true });

        localStorage.setItem('lastPath', '/dc');

        wrapper.find('button').simulate('click');

        expect(mockNavigate).toHaveBeenCalledWith("/dc", { "replace": true });

    });

});
