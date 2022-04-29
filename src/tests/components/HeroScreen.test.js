const { mount } = require("enzyme");
const { MemoryRouter, Routes, Route } = require("react-router-dom");
const { HeroesScreen } = require("../../components/heroes/HeroesScreen");


const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))


describe('test on HeroScreen', () => {
    test('should not show the hero if there isnt a hero in the url', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path='/hero' element={<HeroesScreen />} />
                    <Route path='/' element={<h1>No heroes page</h1>} />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find('h1').text().trim()).toBe('No heroes page')
    });


    test('should show the hero if there is a hero in the url', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-iron']}>
                <Routes>
                    <Route path='/hero/marvel-iron' element={<HeroesScreen />} />

                    <Route path='/' element={<h1>No heroes page</h1>} />
                </Routes>
            </MemoryRouter>
        );
        //fix
        // expect(wrapper.find('.row').exists()).toBe(true);

        console.log(wrapper.debug());

    });

    test('should return the previous page', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path='/hero' element={<HeroesScreen />} />
                    <Route path='/' element={<h1>No heroes page</h1>} />
                </Routes>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

    });

});
