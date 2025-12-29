'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {

    const router = useRouter();

    const handlePrompt = () => {
        const password = prompt("Enter Your Password!")
        if(password === '1234'){
            router.push('/dashboard')
        }
    }

    return (
        <div className='text-center space-y-5 rounded bg-linear-60 from-sky-100 to-sky-400 text-black p-10'>
            <h3 className='text-4xl font-bold'>This is a Banner</h3>
            <button onClick={handlePrompt} className='btn px-4 py-2 rounded  cursor-pointer bg-sky-600 text-white hover:bg-black duration-300'>Share-Story</button>
        </div>
    );
};

export default Banner;