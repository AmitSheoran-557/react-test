
import React, { useEffect, useState } from 'react';

const AutoCounting = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        if (count <= 100) {
            const interval = setTimeout(() => {
                setCount(count + 1);
            }, 1000);

            return () => clearTimeout(interval);
        }
    }, [count]);

    return (
        <div className='bg-black mx-auto py-5 d-flex flex-column justify-content-center align-items-center'>
                <h2 className='text-white mb-2'> This a Counting with delay from 1 to 100</h2>

            <h1 className='text-white'>Counting: {count}</h1>
        </div>
    );
};

export default AutoCounting;
