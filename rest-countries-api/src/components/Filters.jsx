import { Fragment, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';

const regionList = [
  { name: 'All' },
  { name: 'Europe' },
  { name: 'Asia' },
  { name: 'Africa' },
  { name: 'Americas' },
  { name: 'Oceania' },
];

function Filters({ countries, setCountries }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({ name: 'Filter by Region' });
  console.log(filter);

  const updateCountries = () => {
    if (!search) {
      console.log('no actualizo nada', !search);
      return setCountries(countries);
    }
    const listing = [...countries];
    const newList = listing.filter((item) => {
      if (item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        console.log('coincide');
        return true;
      }
    });
    setCountries(newList);
  };

  useEffect(() => {
    // console.log('updating filters', search, filter);
    updateCountries();
  }, [search, filter]);

  return (
    <div className="flex w-full items-center justify-between">
      <div className="relative w-[475px]">
        <svg
          className="absolute top-4 left-7 h-5 w-5  dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          name="search"
          className="w-full rounded-md py-4 pl-[70px] pr-4 text-sm shadow-sm outline-none dark:bg-darkElements dark:text-white"
          placeholder="Search for a country"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-1 justify-end">
        <div className="w-52">
          <Listbox value={filter} onChange={setFilter}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-4 pl-6 pr-10 text-left shadow-sm focus:outline-none dark:bg-darkElements dark:text-white sm:text-sm">
                <span className="block truncate">{filter.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none dark:bg-darkElements sm:text-sm">
                  {regionList.map((item, itemIdx) => (
                    <Listbox.Option
                      key={itemIdx}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                          active
                            ? 'bg-slate-200 text-slate-700 dark:bg-slate-600 dark:text-slate-300'
                            : 'text-slate-900 dark:text-white'
                        }`
                      }
                      value={item}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-extrabold' : 'font-normal'
                            }`}
                          >
                            {item.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-cyan-600">
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
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  );
}

export default Filters;
