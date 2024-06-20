import NavCatto from '../NavCatto/NavCatto';
import NavMobileCatto from '../NavCatto/NavMobileCatto';
// import NavCatto from '../NavCatto/NavCatto';
// import NextAuthLoginOutCatto from '../Auth/NextAuthLoginOutCatto';
// import NavSimpleCatto from '../NavSimpleCatto/NavSimpleCatto';
import React from 'react';

const HeaderCatto = () => {
  return (
    <>
      <header className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
        {/* Desktop */}
        <div className="hidden w-full lg:block lg:h-20">
          <NavCatto />
        </div>
        {/* Mobile: */}
        <div className="block lg:hidden">
          <NavMobileCatto />
        </div>
      </header>
    </>
  );
};
export default HeaderCatto;
