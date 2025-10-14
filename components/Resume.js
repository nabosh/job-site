/** @format */

import React from "react";
import Link from "next/link";

export default function Resume() {
  return (
    <div className='flex items-center justify-center mt-4'>
      <Link
        href="/resume"
        className='cursor-pointer uppercase py-2 my-2 px-4 bg-transparent dark:text-sm dark:text-gray-100 dark:hover:text-gray-900 dark:bg-gray-900 dark:hover:bg-gray-200 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md'
      >
        Resume
      </Link>
    </div>
  );
}