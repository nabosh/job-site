import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';

import Newresume from '../components/Newresume';
// import Tabs from '../components/Tabs';
// import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main class="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-auto">
        <div class="flex relative z-20 items-center mt-10">
          <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div class="flex flex-col">
              <img src="/neil.png" class="rounded-full w-28 mx-auto" />
              <p class="text-3xl my-6 text-center dark:text-white">Neil</p>
              {/* <h2 class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
              I've managed international customers, built websites, been in
              charge of Software Development & IT, and am currently a CTO at a
              small startup.
            </h2> */}
              {/* <div class="flex items-center justify-center ">
                <a
                  href="#"
                  class="uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                >
                  I have records
                </a>
              </div> */}
              <Newresume />

              <div class="flex items-center justify-center mt-4">
                <a
                  href="https://www.linkedin.com/in/aboshamaa/"
                  target="_blank"
                  class="uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                >
                  I have 500+ connections
                </a>
              </div>
              <div class="flex items-center justify-center mt-4">
                <a
                  href="https://www.google.com/search?q=neil+aboshamaa"
                  target="_blank"
                  class="uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                >
                  I have been stalked by corporate america
                </a>
              </div>
              <div class="flex items-center justify-center mt-4">
                <a
                  href="mailto:nabosh+website@outlook.com"
                  class="uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                >
                  I have access to asynchronous digital messaging technology
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by me using NextJS, ReactJS, TailwindCSS and hosted on Vercel{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
