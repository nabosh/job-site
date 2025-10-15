/** @format */

import styles from "../styles/Home.module.css";
import Resume from "../components/Resume";
import { ThemeProvider } from "../components/ThemeContext";
import Background from "../components/Background";
import ThemeToggle from "../components/ThemeToggle";
import ImageSwitch from "../components/ImageSwitch";
import Script from 'next/script'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Script src="https://widget-staging.talentplatform.com/main.js" data-altru-widget-id="171890" data-altru-global-region="us" />
      <ThemeProvider>
        <Background>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="py-4">
              <ThemeToggle />
            </header>
            <main className="dark:bg-black font-mono bg-white relative overflow-hidden">
              <div className="flex flex-col items-center mt-10">
                <ImageSwitch />
                <p className="text-3xl my-6 text-center dark:text-white">
                  Neil
                </p>
                <p className="text-lg text-center dark:text-gray-300 text-gray-700 mb-4">
                  Current Role (2024): Senior Software Engineer at iCIMS
                </p>
                <div className="flex items-center justify-center mt-4">
                  <a
                    href="https://www.linkedin.com/in/aboshamaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer uppercase py-2 my-2 px-4 bg-transparent dark:text-sm dark:text-gray-100 dark:hover:text-gray-900 dark:bg-gray-900 dark:hover:bg-gray-200 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                  >
                    LinkedIn{" "}
                  </a>
                </div>
                <Resume />
                <div className="flex items-center justify-center mt-4">
                  <a
                    href="mailto:nabosh+website@outlook.com"
                    className="cursor-pointer uppercase py-2 my-2 px-4 bg-transparent dark:text-sm dark:text-gray-100 dark:hover:text-gray-900 dark:bg-gray-900 dark:hover:bg-gray-200 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                  >
                    Email
                  </a>
                </div>
              </div>
            </main>
          </div>
        </Background>
      </ThemeProvider>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono pt-0"
        >
          Built using NextJS, ReactJS & TailwindCSS. Hosted on Vercel.
        </a>
      </footer>
    </div>
  );
}
