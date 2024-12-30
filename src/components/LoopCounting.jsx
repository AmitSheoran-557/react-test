import React from 'react';

const CountingComponent = () => {
  const numbers = [];
  for (let i = 9; i >= 0; i--) {
    numbers.push(i);
  }

  return (
    <div className='bg-black mx-auto py-5 d-flex flex-column justify-content-center align-items-center' >
      <h1 className='text-white'>Counting 9-0  Using For Loop</h1>
      <div>
        {numbers.map((num, index) => (
          <p className='d-flex text-white' key={index}>{num}</p> 
        ))}
      </div>
    </div>
  );
};

export default CountingComponent;