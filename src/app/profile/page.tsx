'use client'
import React from 'react'
import classnames from 'classnames'
import Image from 'next/image';
import Ega from '../../../public/Ega.png'
import Ica from '../../../public/Ica.png'
import { TweenMax, Power3 } from 'gsap'

export default function Page() {
  let containerBorder: any = React.useRef(null)
  let textTitle : any = React.useRef(null)
  let textEga : any = React.useRef(null)
  let textIca : any = React.useRef(null)


  React.useEffect(() => {
    TweenMax.to(containerBorder, .8, { opacity: 1, ease: Power3.easeOut })
    TweenMax.to(textTitle, .8, { opacity: 1,delay:.5, ease: Power3.easeOut })
    TweenMax.to(textEga, .8, { opacity: 1,delay:.8, ease: Power3.easeOut })
    TweenMax.to(textIca, .8, { opacity: 1,delay:1, ease: Power3.easeOut })
}, [])

  return (
    <div className={classnames('border-[4px]  max-h-[calc(100vh-220px)]  md:max-h-[calc(100vh-80px)] lg:max-h-[calc(100vh-80px)] overflow-x-hidden overflow-y-auto   border-[#BB9096] p-[16px] opacity-0')} ref={item => { containerBorder = item }}>
      <div className={classnames('flex flex-col text-center items-center justify-center ')}>
        <p className={classnames('text-[16px] max-w-[355px] leading-[100%] tracking-[.1em] font-dancing opacity-0')} ref={item => { textTitle = item }}>Bismillahirrahmanirrahiim
          <br /><br /><span >Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan Akad Nikah & Resepsi Pernikahan putra-putri kami,</span></p>
      </div>
      <div className='relative mt-[-10px] z-2 opacity-0' ref={item => { textIca = item }}>
        <div className={classnames('ml-[-35px] z-99')}>
        <Image src={Ega} width={300} alt="ega" />
        </div>
        <div className='absolute flex left-[100px] top-[50px]'>
          <div className={classnames('flex flex-col')}>
          <p className={classnames('font-dancing text-[#965A00] text-[24px]')}>Ega Evan, S.Kom.</p>
          <p className={classnames('text-[#965A00] text-[14px] text-[#000000] leading-[17px] font-montaga')}>Putra dari Bpk.
            <br/>Ardimus Achmad
            <br/>& Ibu Surniati Sawir</p>
          </div>
        </div>
      </div>
      <div className='flex justify-end relative z-99 mt-[-50px] opacity-0' ref={item => { textEga = item }}>
        <div className={classnames('mr-[-20px]')}>
          <Image src={Ica} width={300} alt="ega" />
        </div>
        <div className='absolute left-0 top-[60px]'>
          <p className={classnames('font-dancing text-[#965A00] text-[24px]')}>Annisa Nurgustia, S.Kom.</p>
          <p className={classnames('text-[#965A00] text-[14px] text-[#000000] leading-[17px] font-montaga')}>Putri dari Bpk.
            <br/>Agus Setiawan, M.Pd.
            <br/>& Ibu Nettia Murni</p>
        </div>
      </div>
    </div>
  );
}