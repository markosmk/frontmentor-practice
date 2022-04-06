import { useState } from 'react';
import allCountries from '../service/countries';

const BASE = 'https://restcountries.com/v2';
const URL_DETAIL = `${BASE}/alpha/`;
const URL_HOME = `${BASE}/all?fields=name,flags,region,capital,population,alpha3Code`;

function useFetchData() {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  // call api for results
  const fetchFromApi = async (codeCountry) => {
    setLoading(true);
    const urlToFetch = codeCountry ? URL_DETAIL + codeCountry : URL_HOME;
    try {
      const response = await fetch(urlToFetch);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult(allCountries);
      // setError(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [result, isLoading, isError, fetchFromApi];
}

export default useFetchData;
