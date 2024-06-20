import NavLinksCatto from './NavLinksCatto';

const NavCatto = () => {
  return (
    <>
      <nav className="fixed start-0 top-0 z-20 h-20 w-full border-b border-gray-200 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
        <div className="mx-auto flex h-20 items-center justify-between p-4">
          <div className="flex-[25%]">
            <h1 className="dark:text-blue-400">RLeaguez</h1>
          </div>
          <div className="flex flex-[75%] justify-end">
            <NavLinksCatto />
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavCatto;
