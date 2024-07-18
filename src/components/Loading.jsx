import React from 'react';

const LoadingLine = () => {
  return (
    <div className="h-1 w-full ">
      <div
        className="h-full bg-green-500"
        style={{
          animation: 'loading-line-animation 2s linear infinite',
        }}
      ></div>
    </div>
  );
};

export default LoadingLine;
