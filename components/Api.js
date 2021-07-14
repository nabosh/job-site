import axios from 'axios';
import React from 'react';

const baseURL = 'https://catfact.ninja/fact';

export default function Api() {
  const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  function getFact() {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }

  if (!post)
    return (
      <div class="pt-10">
        <div class="flex items-center justify-center mt-4">
          <button
            onClick={getFact}
            class="text-xs uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-300 text-gray-300 dark:text-white hover:bg-gray-800 hover:text-white text-md mt-1 cursor-pointer"
          >
            Bored? Get a Fact
          </button>
        </div>
      </div>
    );

  return (
    <div class="pt-10">
      <div class="flex items-center justify-center mt-4">
        <button
          onClick={getFact}
          class="uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md mt-1 cursor-pointer"
        >
          Another?
        </button>
      </div>
      <h1 class="pt-6">{post.fact}</h1>
    </div>
  );
}
