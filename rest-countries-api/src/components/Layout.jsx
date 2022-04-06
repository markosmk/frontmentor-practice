import { Link, Outlet } from 'react-router-dom';
import ButtonTheme from './ButtonTheme';

function Layout() {
  return (
    <div>
      <header className="bg-white dark:bg-darkElements">
        <div className="container mx-auto flex h-20 items-center justify-between px-2 ">
          <Link to="/">
            <h1 className="text-2xl font-extrabold text-lightText dark:text-white">
              Where in the world?
            </h1>
          </Link>
          <ButtonTheme />
        </div>
      </header>

      <div className=" container mx-auto px-2">
        <main className="mt-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
