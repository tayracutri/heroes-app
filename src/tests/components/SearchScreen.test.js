import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../components/search/SearchScreen";

const mockNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate
}))

describe('test on SerachScreen', () => {
    test('should show the components w the default values', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero')
    });

    test('should show Batman and the input w the queryString valie', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen />
            </MemoryRouter>
        )
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();

    });

    test('should show an error if the hero isnt found', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batmn']}>
                <SearchScreen />
            </MemoryRouter>
        )
        expect(wrapper.find('.alert-danger').text().trim()).toBe('Couldnt find a hero named batmn')
    })

    test('should call the navigate to the new screen', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>

                <SearchScreen />
            </MemoryRouter>
        )

        wrapper.find('input').simulate('change', {
            target: {
                name: 'formText',
                value: 'batman'
            }
        });

        wrapper.find('form').simulate('submit')
        expect(mockNavigate).toHaveBeenCalledWith('?q=batman');

    });


});
