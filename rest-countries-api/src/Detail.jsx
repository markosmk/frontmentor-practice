import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Spinner from './components/Spinner';
import useFetchData from './hooks/useFetchData';

function ItemDetail({ title, value }) {
  return (
    <div className="flex space-x-2">
      <b className="font-semibold">{title}:</b>{' '}
      <span className="font-light">{value}</span>
    </div>
  );
}

function Detail() {
  let { countryCode } = useParams();
  const [country, loading, error, fetchData] = useFetchData();

  useEffect(() => {
    fetchData(countryCode);
  }, [countryCode]);

  if (loading) {
    return (
      <div className="mt-12 flex w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/"
        className="mt-20 flex w-36 max-w-sm items-center justify-center space-x-2 rounded-md bg-white px-4 py-2 font-semibold shadow-lg transition-shadow active:shadow-none"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        <span>Back</span>
      </Link>

      {country && (
        <div className="mt-20 flex space-x-[120px]">
          <div className="h-[400px] w-[550px] overflow-hidden">
            <img src={country.flags.svg} alt={country.name} />
          </div>
          <div className="mt-10 flex-1">
            {/** title */}
            <h1 className="text-3xl font-extrabold">{country.name}</h1>
            {/** information */}
            <div className="mt-8 flex w-full gap-4 text-base">
              <div className="w-1/2 space-y-2">
                <ItemDetail title="Native Name" value={country.nativeName} />
                <ItemDetail
                  title="Population"
                  value={new Intl.NumberFormat().format(country.population)}
                />
                <ItemDetail title="Region" value={country.region} />
                <ItemDetail title="Sub Region" value={country.subregion} />
                <ItemDetail title="Capital" value={country.capital} />
              </div>
              <div className="w-1/2 space-y-2">
                <ItemDetail title="Top Level Domain" value={country.topLevelDomain[0]} />
                <ItemDetail title="Currencies" value={country.currencies[0].name} />
                <ItemDetail
                  title="Languages"
                  value={country.languages.map((item) => item.name).join(', ')}
                />
              </div>
            </div>

            <div className="mt-20">
              <div className="flex space-x-2">
                <b className="font-semibold">Border Countries:</b>
                <div className="space-x-2 font-light">
                  {country.borders?.map((item) => {
                    return (
                      <Link
                        key={item}
                        to={`/${item}`}
                        className="rounded-md bg-white px-4 py-2 shadow-md transition-shadow active:shadow-none"
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
