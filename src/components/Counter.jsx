import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="counter bg-black mx-auto">
            <div className="container mx-auto py-3 d-flex flex-column justify-content-center align-items-center">
                <h2 className='text-white'> This is a counter with Increment and Decrement Button</h2>
                <h3 className='text-white'>Counter: {count}</h3>
                <div className='d-flex gap-5'>
                <button onClick={decrement}>Decrement</button>
                <button onClick={increment}>Increment</button>
            </div>
            </div>
        </div>
    );
};

export default Counter;
