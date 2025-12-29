import Link from 'next/link';

const NotFound = () => {
    
    return (
        <div className='flex flex-col justify-center items-center min-h-screen gap-4'>
            <h3 className=' text-3xl '> <span className='text-red-400 font-bold'>404</span> | PAGE NOT FOUND!</h3>
            <Link href={'/'} className='underline text-lg btn bg-white p-3 text-black'>🏡 Back to Home</Link>
        </div>
    );
};

export default NotFound;