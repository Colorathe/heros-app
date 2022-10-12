import HeroCard from "../components/HeroCard";
import { useForm } from "../../hooks/useForm.js";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSearchSubmit}>
            <input
              type='text'
              className='form-control'
              placeholder='Seach a Hero'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Result</h4>
          <hr />

          {q === "" ? (
            <div className='alert alert-primary animate__animated animate__fadeIn'>
              Search a hero
            </div>
          ) : (
            heroes.length === 0 && (
              <div className='alert alert-danger animate__animated animate__fadeIn'>
                There's no result for <b>{q}</b>
              </div>
            )
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
