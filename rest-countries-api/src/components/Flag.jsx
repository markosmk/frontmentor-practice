import { Link } from 'react-router-dom';

function Flag({ item }) {
  return (
    <Link
      to={`/${item.alpha3Code}`}
      className="flex flex-col overflow-hidden rounded-md bg-white shadow-sm transition-all hover:shadow-lg active:scale-95 dark:bg-darkElements"
    >
      <div
        className="h-[158px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${item.flags.svg}')`,
        }}
      ></div>
      <div className="bg-white px-6 pt-6 pb-10 text-lightText dark:bg-darkElements dark:text-white">
        <h2 className="text-lg font-extrabold">{item.name}</h2>
        <div className="mt-[14px] space-y-1 text-sm">
          <div className=" flex space-x-2">
            <b className="font-semibold">Population:</b>{' '}
            <span className="font-light">
              {new Intl.NumberFormat().format(item.population)}
            </span>
          </div>
          <div className="flex space-x-2">
            <b className="font-semibold">Region:</b>{' '}
            <span className="font-light">{item.region}</span>
          </div>
          <div className="flex space-x-2">
            <b className="font-semibold">Capital:</b>{' '}
            <span className="font-light">{item.capital}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Flag;
