// import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import ReactGA from 'react-ga';
ReactGA.initialize('G-GVE2YQNBXM');
ReactGA.pageview(window.location.pathname + window.location.search);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
