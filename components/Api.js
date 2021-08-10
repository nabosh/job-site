/** @format */

import axios from "axios";
import React from "react";

const baseURL = "https://catfact.ninja/fact";

export default function Api() {
  const [show, setShow] = React.useState(false);

  function getFact() {
    axios.get(baseURL).then((response) => {
      setShow(response.data);
    });
  }

  function stopFact() {
    const elements = document.getElementsByClassName("catFact");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }

  return (
    <div className='pt-10'>
      {show ? (
        <div className='pt-10'>
          <div className='flex items-center justify-center mt-4 catFact'>
            <button
              onClick={getFact}
              className='uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-600 dark:bg-grey-800 hover:dark:bg-gray-400 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md mt-1 cursor-pointer'
            >
              More?
            </button>
            <button
              onClick={() => setShow(false)}
              className='uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-600 dark:bg-grey-800 hover:dark:bg-gray-400 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md mt-1 cursor-pointer'
            >
              No More!
            </button>
          </div>
          <h1 className='pt-6 catFact dark:text-gray-200'>{show.fact}</h1>
        </div>
      ) : (
        <div className='pt-10'>
          <div className='flex items-center justify-center mt-4'>
            <button
              onClick={() => setShow(true)}
              onClick={getFact}
              className='text-xs uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-600 dark:bg-grey-800 hover:dark:bg-gray-400 border-2 border-gray-300 dark:border-gray-600 text-gray-300 dark:text-white hover:bg-gray-800 hover:text-white text-md mt-1 cursor-pointer'
            >
              Bored? Get Facts
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
