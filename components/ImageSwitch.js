/** @format */

import React, { useState } from "react";

export default function ImageSwitch() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className='toggle-wrapper'>
        {toggle ? (
          <img
            className='rounded-full w-28 mx-auto'
            src='/gorilla.png'
            alt='yellow star'
            onClick={() => setToggle(false)}
          />
        ) : (
          <img
            className='rounded-full w-28 mx-auto'
            src='/neil.png'
            alt='black and white star'
            onClick={() => setToggle(true)}
          />
        )}
      </div>
    </>
  );
}
