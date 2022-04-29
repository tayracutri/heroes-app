import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../components/auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes'


describe('test on DasboardRoutes', () => {

    const value = {
        dispatch: jest.fn(),
        user: { name: 'Tayra' }
    }

    test('should show marvel component (/)', () => {
        const wrapper = mount(
            <AuthContext.Provider value={value}>
                <MemoryRouter initialEntries={['/']}>
                    <DashboardRoutes />
                </MemoryRouter>

            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();

        //busco el navbar
        expect(wrapper.find('.text-info').text().trim()).toBe('Tayra');
        expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen');


    });

    test('should show dc component (/dc)', () => {
        const wrapper = mount(
            <AuthContext.Provider value={value}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashboardRoutes />
                </MemoryRouter>

            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();


        expect(wrapper.find('h1').text().trim()).toBe('DC Screen');
    });
})
