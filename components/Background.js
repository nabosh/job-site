/** @format */

const Background = ({ children }) => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 min-h-screen bg-white dark:bg-black transition-all'>
      {children}
    </div>
  );
};

export default Background;

