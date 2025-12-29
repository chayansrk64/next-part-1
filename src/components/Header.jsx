import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='px-4 flex justify-between items-center border-b-2 border-gray-300'>
            <Link href={'/'} className='text-xl font-bold py-3 '>✨ Lo <span className='text-green-600 '>Go</span></Link>

            <nav className='space-x-4'>
                <Link href={'/stories'}>Stories</Link>
                <Link href={'/tutorials'}>Tutorials</Link>
                <Link href={'/login'}>Login</Link>
                <Link href={'/register'}>Register</Link>
                <Link href={'/about'}>About</Link>
            </nav>
        </div>
    );
};

export default Header;