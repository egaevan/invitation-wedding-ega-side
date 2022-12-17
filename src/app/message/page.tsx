'use client'
import React from 'react'
import classnames from 'classnames'
import Image from 'next/image';
import flower3 from '../../../public/flower3.png'
import Ica from '../../../public/Ica.png'
import { TweenMax, Power3 } from 'gsap'
import BG2 from '../../../public/bg2.png'
import Calender from '../../../public/calender.png'
import Time from '../../../public/time.png'
import Place from '../../../public/place.png'
import Cincin from '../../../public/cincin.png'
import Cheers from '../../../public/cheers2.png'


export default function Page() {
  let containerBorder: any = React.useRef(null)
  let containerImage: any = React.useRef(null)
  const [dataMessage, setDataMessage]= React.useState<{nama:string,ucapan:string}>({nama:'', ucapan:''})

  React.useEffect(() => {
    TweenMax.to(containerImage, .8, { opacity: 1, ease: Power3.easeOut })
    TweenMax.to(containerBorder, .8, { opacity: 1, delay: .5, ease: Power3.easeOut })

  }, [])

  const onChangeData  = (name:string, value:string) => {
    setDataMessage(prevState =>({
      ...prevState,
      [name]:value
    }))
  }

  return (
    <div className={classnames('height-page-message  md:max-h-[calc(100vh-130px)] lg:max-h-[calc(100vh-130px)] overflow-x-hidden overflow-y-auto ')}>
      <div className={classnames('h-[312px] mt-[-40px] relative opacity-0')} ref={item => { containerImage = item }}>
        <Image
          alt='Mountains'
          src={BG2}
          object-fit='fill'
        />
      </div>

      <div className={classnames('mt-[80px] px-[40px] opacity-0')} ref={item => { containerBorder = item }}>
        <div className={classnames('bg-[#FEDFE3] pb-[50px] rounded-md flex flex-col font-caladea pt-[16px] px-[23px]')} style={{ boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)' }}>
          <div className={classnames('flex flex-col items-center')}>
            <h1 className={classnames('p-0 m-0 font-caladea text-[#965A00] text-[24px]')}>ICA</h1>
            <h1 className={classnames('p-0 m-0 font-caladea text-[#965A00] text-[24px]')}>&</h1>
            <h1 className={classnames('p-0 m-0 font-caladea text-[#965A00] text-[24px]')}>EGA</h1>
            <Image
              alt='Mountains'
              src={flower3}
              width={166}
            />
            <p className={classnames('font-caladea text-[14px]')}>Kehadiranmu sangat berharga bagi kami</p>
          </div>
          <div className={classnames('flex items-start flex-col mt-[19px] relative w-screen')}>
            <p className={classnames(' text-[14px]')}>Nama</p>
            <input onChange={(e) => {onChangeData('nama',e.target.value)}} className={classnames('py-[5px] text-[14px] px-[16px] rounded-md border border-[#B4B4BB] mt-[8px] w-[77vw] md:w-[301px] lg:w-[301px]')} placeholder="Nama"/>
          </div>
          <div className={classnames('flex items-start flex-col mt-[19px] relative w-screen')}>
            <p className={classnames(' text-[14px]')}>Ucapan</p>
            <textarea onChange={(e) => {onChangeData('ucapan',e.target.value)}}  className={classnames('py-[5px] text-[14px] px-[16px] h-[125px] rounded-md border border-[#B4B4BB] mt-[8px] w-[77vw] md:w-[301px] lg:w-[301px]')} placeholder="Selamat atas pernikahannya"></textarea>
          </div>
          <button className={classnames('py-[14px] w-[77vw] md:w-[301px] lg:w-[301px] mt-[42px] rounded-md relative bg-[#D49494] text-white opacity-1 hover:bg-[#e8aeae]')} >
          Kirim
          </button>
        </div>
      </div>
    </div>
  );
}