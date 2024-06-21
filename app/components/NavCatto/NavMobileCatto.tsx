import NavLinksCatto from './NavLinksCatto';

const NavMobileCatto = () => {
  return (
    <>
      <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
        <div className="mx-auto flex items-center justify-between p-4">
          <div className="flex-[25%]">
            <h1 className="dark:text-blue-400">SiteName</h1>
          </div>
          <div className="flex flex-[75%] justify-end">
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            {/* <NavLinksCatto /> */}
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavMobileCatto;
