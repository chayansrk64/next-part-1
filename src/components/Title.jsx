import React from 'react';

const Title = ({children}) => {
    return (
        <div>
            <h2 className='text-4xl font-bold bg-linear-60 from-sky-200 to-sky-300 text-black p-4 rounded'>{children}</h2>
        </div>
    );
};

export default Title;