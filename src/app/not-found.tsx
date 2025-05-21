// Next.js 15 - src/app/not-found.tsx
'use client';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='inline-block bg-gradient-to-b from-blue-700 to-blue-200 to-[75%] bg-clip-text font-mono text-[10rem] font-light text-transparent sm:text-[20rem]'>
                404
            </div>

            <div className='text-2xl mb-6 mt-[-2rem]'>Page not found</div>

            <Link
                href='/'
                className='border border-primary text-primary px-6 py-3 rounded-full uppercase text-sm tracking-wider hover:bg-primary hover:text-secondary transition-colors'
            >
                BACK TO HOME →
            </Link>
        </div>
    );
};

export default NotFound;
