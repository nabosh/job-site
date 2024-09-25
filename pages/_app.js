import "tailwindcss/tailwind.css";
import { ThemeProvider } from "../components/ThemeContext";
import Background from "../components/Background";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Background>
        <div className="min-h-screen bg-white dark:bg-black">
          <Component {...pageProps} />
        </div>
      </Background>
    </ThemeProvider>
  );
}

export default MyApp;