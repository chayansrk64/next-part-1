import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div className='flex gap-6 min-h-screen '>
            <div className='flex-2'>
                {children}
            </div>
            <div className='flex-1 bg-sky-500 flex justify-center items-center p-5 '>
                <h2 className='text-5xl font-bold'>Welcome for Authentication</h2>
            </div>
            
        </div>
    );
};

export default AuthLayout;