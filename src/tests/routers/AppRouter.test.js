import { AppRouter } from "../../routers/AppRouter"
import { mount } from 'enzyme'
import { AuthContext } from "../../components/auth/AuthContext";



describe('test on AppRouter', () => {
    const value = {
        dispatch: jest.fn(),
        user: { logged: false }
    }

    test('should show the loginscreen if the user isnt auth', () => {


        const wrapper = mount(
            <AuthContext.Provider value={value}>

                <AppRouter />

            </AuthContext.Provider>
        )
        // console.log(wrapper.html());

        expect(wrapper.find('div').exists()).toBe(true);
        expect(wrapper.find('h1').text().trim()).toBe('Login Screen');
        expect(wrapper).toMatchSnapshot();
    });

    test('should show the marvelscreen if the user is auth', () => {

        const value = {
            dispatch: jest.fn(),
            user: { name: 'Tayra', logged: true }
        }
        const wrapper = mount(
            <AuthContext.Provider value={value}>

                <AppRouter />

            </AuthContext.Provider>
        )

        expect(wrapper.find('.navbar').exists()).toBeTruthy();

    });
});

