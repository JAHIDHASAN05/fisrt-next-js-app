"use client"
import { useState } from 'react';

const Counters = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <div className='text-7xl text-center mt-5 mb-12 font-bold '>
                <h1 >{counter}</h1>
                <button onClick={() => setCounter(counter + 1)}>Increase</button>
                <button onClick={() => setCounter(counter - 1)}>Decrease</button>
                <button onClick={() => setCounter(counter - 1)} className="btn btn-accent">Accent</button>
            </div>
        </div>
    );
};

export default Counters;