import axios from 'axios';
import React from 'react';

const baseURL = 'https://catfact.ninja/fact';

export default function Api() {
  const [post, setPost] = React.useState(null);

  function getFact() {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }

  function stopFact() {
    const elements = document.getElementsByClassName('catFact');
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }

  if (!post)
    return (
      <div className="pt-10">
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={getFact}
            className="text-xs uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-300 text-gray-300 dark:text-white hover:bg-gray-800 hover:text-white text-md mt-1 cursor-pointer"
          >
            Bored? Get a Fact
          </button>
        </div>
      </div>
    );

  return (
    <div className="pt-10">
      <div className="flex items-center justify-center mt-4 catFact">
        <button
          onClick={getFact}
          className="uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md mt-1 cursor-pointer"
        >
          More?
        </button>
        <button
          onClick={stopFact}
          className="uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md mt-1 cursor-pointer"
        >
          No More!
        </button>
      </div>
      <h1 className="pt-6 catFact">{post.fact}</h1>
    </div>
  );
}
