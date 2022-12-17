'use client'
import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import Message from '../../../public/message.png'
import Location from '../../../public/location.png'
import User from '../../../public/user.png'
import Image from 'next/image'
import { TweenMax, Power3 } from 'gsap'

export const Footer = () => {
    let weddingText: any = React.useRef(null)

    React.useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        TweenMax.to(weddingText, .8, { opacity: 1,  delay:.3, ease: Power3.easeOut })
    }, [])

    return (
        <div className={classnames('h-[65px] px-[8px]  absolute bottom-0 bg-white left-0 right-0 opacity-0')} style={{ boxShadow: '6px -10px 13px -11px rgba(0, 0, 0, 0.25)' }} ref={item => { weddingText = item }}>
            <div className='flex justify-between px-[24px] py-[12px]'>
                <div className='containerFooter'>
                    <Link href="/profile" as="/profile" passHref>
                        <div className={classnames('containerFooter flex cursor-pointer flex-col items-center')}>
                            <Image src={User} width={25} height={25} alt="user" />

                            <p>Profile</p>
                        </div>
                    </Link>
                </div>
                <div className='containerFooter'>
                    <Link href="/location" as="/location" passHref>
                        <div className={classnames('containerFooter flex cursor-pointer flex-col items-center')}>
                            <Image src={Location} width={25} height={25} alt="Location" />

                            <p>Location</p>
                        </div>
                    </Link>
                </div>
                <div className='containerFooter '>
                <div className={classnames('containerFooter flex cursor-pointer flex-col items-center')}>
                        <Image src={Message} width={25} height={25} alt="Message" />

                            <p className={classnames('mt-2')}>Message</p>
                        </div>
                </div>
            </div>
        </div>
    )
}