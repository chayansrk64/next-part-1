import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-3 min-h-screen'>
                <div className="col-span-3 border-r-2">
                     <Link href={'/'} className='text-xl font-bold py-3 '>✨ Lo <span className='text-green-600 '>Go</span></Link>

                    <div className='flex flex-col gap-6 mt-10 me-3'>
                        <Link href={'/dashboard/add-story'} className='bg-gray-300 text-black p-3 rounded' >Add Story</Link>
                        <Link href={'/dashboard/my-profile'}className='bg-gray-300 text-black p-3 rounded' >My Profile</Link>
                        <Link href={'/dashboard/settings'}className='bg-gray-300 text-black p-3 rounded' >Settings</Link>
                    </div>
                </div>
                <div className="col-span-9">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;