import 'tailwindcss/tailwind.css';
// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-6594191-1');
// ReactGA.pageview(window.location.pathname + window.location.search);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
