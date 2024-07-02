'use client';
import Link from 'next/link';
import React from 'react';

const NavLinksCatto = () => {
  return (
    <>
      <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
        <li>
          <Link
            href="/"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/leaguez"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Leaguez
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            About
          </Link>
        </li>
      </ul>
    </>
  );
};
export default NavLinksCatto;
