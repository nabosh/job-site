/** @format */

import styles from "../styles/Home.module.css";
import Resume from "../components/Resume";
import { ThemeProvider } from "../components/ThemeContext";
import Background from "../components/Background";
import ThemeToggle from "../components/ThemeToggle";
import Api from "../components/Api";

export default function Home() {
  return (
    <div>
      <header>
        <meta name='robots' content='noindex' />
      </header>
      <ThemeProvider>
        <Background>
          <main className='dark:bg-black font-mono bg-white relative overflow-hidden h-auto'>
            <ThemeToggle />
            <div className='flex relative z-20 items-center mt-10'>
              <div className='container mx-auto px-6 flex flex-col justify-between items-center relative '>
                <div className='flex flex-col'>
                  <img src='/neil.png' className='rounded-full w-28 mx-auto' />
                  <p className='text-3xl my-6 text-center dark:text-white'>
                    Neil
                  </p>
                  <div className='flex items-center justify-center mt-4'>
                    <a
                      href='https://www.linkedin.com/in/aboshamaa/'
                      target='_blank'
                      className='cursor-pointer uppercase py-2 my-2 px-4 bg-transparent dark:text-sm dark:text-gray-100 dark:hover:text-gray-900 dark:bg-gray-900 dark:hover:bg-gray-200 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md'
                    >
                      LinkedIn{" "}
                    </a>
                  </div>
                  <Resume />
                  <div className='flex items-center justify-center mt-4'>
                    <a
                      href='mailto:nabosh+website@outlook.com'
                      className='cursor-pointer uppercase py-2 my-2 px-4 bg-transparent dark:text-sm dark:text-gray-100 dark:hover:text-gray-900 dark:bg-gray-900 dark:hover:bg-gray-200 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md'
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Background>
      </ThemeProvider>{" "}
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          className='text-xs font-mono pt-0'
        >
          Built by me in 2021 using NextJS, ReactJS & TailwindCSS. Hosted on
          Vercel.
        </a>
      </footer>
    </div>
  );
}
