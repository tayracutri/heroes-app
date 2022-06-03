import { useMemo } from 'react';
import queryString from 'query-string'
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import HeroesCard from '../heroes/HeroesCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({ history }) => {
    const navigate = useNavigate()
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const filteredHeroes = useMemo(() => getHeroByName(q), [q])

    const [values, handleInputChange] = useForm({
        formText: q
    });
    const { formText } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${formText}`)
    }

    return (
        <div>
            <h1 className='m-4'>Search Screen</h1>

            <div className='row'>
                <div className='col-4'>


                    <form onSubmit={handleSubmit} className='mt-4'>
                        <input
                            type='text'
                            placeholder='Insert a superhero'
                            className='form-control'
                            name='formText'
                            autoComplete='off'
                            value={formText}
                            onChange={handleInputChange}
                        ></input>
                        <button type='submit' className='btn m-1 btn-block btn-outline-primary btn-block' > Submit</button>
                    </form>

                </div>
                <div className='col-8'>
                    <h5 className='mt-4'>Results</h5>
                    <hr />

                    {

                        (q === '') //empty string, search a hero
                            ? <div className='alert alert-info'> Search a hero</div>
                            //if the user searched an unexistent hero (length = 0), throw couldnt find it
                            : (filteredHeroes.length === 0)
                            && <div className='alert alert-danger'> Couldnt find a hero named {q}</div>
                    }
                    {
                        filteredHeroes.map(hero => (
                            <HeroesCard
                                key={hero.id}
                                {...hero} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
