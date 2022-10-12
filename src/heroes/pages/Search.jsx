import HeroCard from "../components/HeroCard";

const Search = () => {
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form>
            <input
              type='text'
              className='form-control'
              placeholder='Seach a Hero'
              name='searchText'
              autoComplete='off'
            />
            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Result</h4>
          <hr />

          <div className='alert alert-primary'>Search a hero</div>
          <div className='alert alert-danger'>There's no result</div>

          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  );
};

export default Search;
