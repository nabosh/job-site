/** @format */

import "tailwindcss/tailwind.css";
// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-6594191-1');
// ReactGA.pageview(window.location.pathname + window.location.search);

function MyApp({ Component, pageProps }) {
  return (
    <div className='px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl'>
      <div className='min-h-screen flexx justify-center items-center'>
        {/* <h1 className='uppercase bg-transparent dark:text-sm dark:text-gray-800 dark:bg-gray-700 hover:dark:bg-gray-100  text-gray-800 dark:text-white hover:bg-gray-800 hover:dark:bg-gray-100 hover:text-white dark:hover:text-red text-md'> */}
        <h1 className=''>
          <Component {...pageProps}></Component>
        </h1>
      </div>
    </div>
  );
}

export default MyApp;
