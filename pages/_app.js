import 'tailwindcss/tailwind.css';
// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-6594191-1');
// ReactGA.pageview(window.location.pathname + window.location.search);

function MyApp({ Component, pageProps }) {
  return (
    <div className="px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl">
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-gray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8">
          <Component {...pageProps} ></Component>
        </h1>
      </div>
    </div>
  );
}

export default MyApp;
