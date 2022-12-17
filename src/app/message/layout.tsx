'use client'
import React from 'react';
import classnames from 'classnames'
import { Footer } from './footer';

const layout = ({ children }: { children: React.ReactNode }) => {
    React.useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, [])
    return (
        <div className={classnames('w-full headermobile overflow-hidden  flex justify-center')} >
            <div className={classnames('headermobile  flex flex-col w-[450px] sm:w-full md:w-[450px] lg:w-[450px]     relative')} >
                <div className={classnames('h-[44px] bg-[#FEDFE3] flex justify-center items-center')}>
                    <p className={classnames('p-0 m-0 text-[#965A00] font-semibold font-caladea')}>I & E</p>
                </div>
                <div className={classnames(`bg-[#ffff] relative flex flex-col z-0 w-full rounded-t-2xl  `)}>
                    <div className={classnames(` relative  ease-in duration-700 transition height-responsive-message md:min-h-[calc(100vh-50px)] lg:min-h-[calc(100vh-50px)] overflow-hidden`)} data-testid="containerChildren">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default layout;