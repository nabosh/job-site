/** @format */

import styles from "../styles/Home.module.css";
import Resume from "../components/Resume";
import Api from "../components/Api";
import { ThemeProvider } from "../components/ThemeContext";
import Background from "../components/Background";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className='dark:bg-black'>
      <header>
        <meta name='robots' content='noindex' />
      </header>
      <ThemeProvider>
        <Background>
          <main className='dark:bg-black font-mono bg-white relative overflow-hidden h-auto'>
            <div className='absolute left-0 top-0 ml-6 ml-6 md:ml-6 md:mt-6'>
              <ThemeToggle />
            </div>
            <div className='flex relative z-20 items-center mt-10'>
              <div className='container mx-auto px-6 flex flex-col justify-between items-center relative py-4'>
                <div className='flex flex-col'>
                  <img src='/neil.png' className='rounded-full w-28 mx-auto' />
                  <p className='text-3xl my-6 text-center dark:text-white'>
                    Neil
                  </p>

                  <Resume />

                  <div className='flex items-center justify-center mt-4'>
                    <a
                      href='https://www.linkedin.com/in/aboshamaa/'
                      target='_blank'
                      className='uppercase py-2 my-2 px-4 bg-transparent dark:text-sm dark:text-gray-100 dark:hover:text-gray-900 dark:bg-gray-900 dark:hover:bg-gray-200 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md'
                    >
                      LinkedIn{" "}
                    </a>
                  </div>
                  <div className='flex items-center justify-center mt-4'>
                    <a
                      href='https://www.google.com/search?q=neil+aboshamaa'
                      target='_blank'
                      className='uppercase py-2 my-2 px-4 bg-transparent dark:text-sm dark:text-gray-100 dark:hover:text-gray-900 dark:bg-gray-900 dark:hover:bg-gray-200 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md'
                    >
                      Google
                    </a>
                  </div>
                  <div className='flex items-center justify-center mt-4'>
                    <a
                      href='mailto:nabosh+website@outlook.com'
                      className='uppercase py-2 my-2 px-4 bg-transparent dark:text-sm dark:text-gray-100 dark:hover:text-gray-900 dark:bg-gray-900 dark:hover:bg-gray-200 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md'
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Background>
      </ThemeProvider>
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          className='text-xs -mt-9'
        >
          Built in 2021 using NextJS, ReactJS, TailwindCSS and hosted on Vercel
        </a>
      </footer>
    </div>
  );
}
