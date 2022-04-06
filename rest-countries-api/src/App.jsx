import { useEffect } from 'react';

import Flag from './components/Flag';
import Spinner from './components/Spinner';
import Filters from './components/Filters';

import useFetchData from './hooks/useFetchData';

function App() {
  const [countries, loading, error, fetchData] = useFetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Filters countries={countries} setCountries={fetchData} />
      {error && <>{error}</>}
      {loading ? (
        <div className="mt-12 flex w-full items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="mt-12 grid gap-[74px] sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
          {countries &&
            countries.map((item) => <Flag key={item.alpha3Code} item={item} />)}
        </div>
      )}
    </>
  );
}

export default App;
