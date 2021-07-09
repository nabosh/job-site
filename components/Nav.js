import React from 'react';

export default function Nav() {
  return (
    <>
      <header class="bg-teal-400">
        <nav class="flex justify-between w-full bg-black text-white p-4">
          <a href="/">
            <span class="font-semibold text-xl tracking-tight">
              Legally Available in US & UK
            </span>
          </a>
          <div class="md:items-center md:w-auto flex">
            <div class="md:flex hidden">
              <a
                class="block md:text-white mr-4"
                href="https://www.linkedin.com/in/aboshamaa/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <div class="flex text-sm" v-else>
              <a
                class="p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600"
                href="mailto:nabosh+website@outlook.com"
              >
                💥 Email 💥
              </a>
            </div>
            <div class="flex flex-wrap justify-center">
              <div class="w-16 px-4">
                <img
                  src="/neil.png"
                  alt="..."
                  class="rounded-full max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
