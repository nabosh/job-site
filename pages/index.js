import styles from '../styles/Home.module.css';
import Resume from '../components/Resume';
import Api from '../components/Api';

export default function Home() {
  return (
    <div>
      <header>
        <meta name="robots" content="noindex" />
      </header>
      <main class="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-auto">
        <div class="flex relative z-20 items-center mt-10">
          <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div class="flex flex-col">
              <img src="/neil.png" class="rounded-full w-28 mx-auto" />
              <p class="text-3xl my-6 text-center dark:text-white">Neil</p>

              <Resume />

              <div class="flex items-center justify-center mt-4">
                <a
                  href="https://www.linkedin.com/in/aboshamaa/"
                  target="_blank"
                  class="uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                >
                  My LinkedIn{' '}
                </a>
              </div>
              <div class="flex items-center justify-center mt-4">
                <a
                  href="https://www.google.com/search?q=neil+aboshamaa"
                  target="_blank"
                  class="uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                >
                  Google Me
                </a>
              </div>
              <div class="flex items-center justify-center mt-4">
                <a
                  href="mailto:nabosh+website@outlook.com"
                  class="uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                >
                  Email Me
                </a>
              </div>
              <Api />
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs -mt-9"
        >
          Built by me in 2021 using NextJS, ReactJS, TailwindCSS and hosted on
          Vercel
        </a>
      </footer>
    </div>
  );
}
