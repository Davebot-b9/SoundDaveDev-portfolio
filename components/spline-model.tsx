'use client';
// import Spline from '@splinetool/react-spline/next';
import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Model = () => {
    return (
        <div className='flex justify-center items-center w-full h-full md:w-[70%] md:h-[80vh] max-w-[800px] max-h-[600px]'>
            <Suspense fallback={<div>Loading...</div>}>
                <Spline className='w-full h-full object-contain' scene='https://prod.spline.design/D5GSsOQ8UJ0xnQdP/scene.splinecode' />
            </Suspense>
        </div>
    );
};

export default Model;
