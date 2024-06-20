const FooterCatto = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900">
      <div className="m-4 rounded-2xl bg-gray-500 pl-4 text-black">
        <span className="text-sm text-gray-500 dark:text-black sm:text-center">
          © {new Date().getFullYear()}{' '}
          <a href="https://www.ChrisCatto.com/" className="hover:underline">
            ChrisCatto.com™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterCatto;
