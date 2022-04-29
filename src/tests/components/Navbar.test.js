const { mount } = require("enzyme");
const { MemoryRouter, Routes, Route } = require("react-router-dom");
const { AuthContext } = require("../../components/auth/AuthContext");
const { types } = require("../../components/types/types");
const { Navbar } = require("../../components/ui/Navbar");

const mockNavigate = jest.fn();


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))


describe('test on Navbar', () => {
    const value = {
        dispatch: jest.fn(),
        user: {
            name: 'Pedro'
        }
    };
    const wrapper = mount(
        <AuthContext.Provider value={value}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<Navbar />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>

    );

    test('should show itself correctly', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Pedro');
    });

    test('should call the logout, dispatch and navigate with their arguments', () => {


        wrapper.find('button').simulate('click');
        expect(value.dispatch).toHaveBeenCalledWith({ "type": types.logout });
        expect(mockNavigate).toHaveBeenCalledWith("login", { "replace": true });

    });

});
