'use client'
import React, {FormEvent, useState} from 'react'
import classnames from 'classnames'
import Image from 'next/image';
import flower3 from '../../../public/flower3.png'
import { TweenMax, Power3 } from 'gsap'
import BG2 from '../../../public/bg-message-small.png'
import {Howl, Howler} from 'howler'


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

  const [nama, setNama] = useState('')
  const [ucapan, setUcapan] = useState('')

  const submitForm = async (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    const form = {
      nama,
      ucapan,
    }

    const response = await fetch(`${process.env.API}/api/submit`,{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(form)
    })

    const content = await response.json();

    console.log('Content',content)

    setNama('')
    setUcapan('')

    console.log(form)
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
          <form onSubmit={submitForm}>
            <div className={classnames('bg-[#FEDFE3] pb-[50px] rounded-md flex flex-col font-caladea pt-[16px] px-[23px]')} style={{ boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              <div className={classnames('flex flex-col items-center')}>
                <h1 className={classnames('p-0 m-0 font-caladea text-[#965A00] text-[24px]')}>EGA</h1>
                <h1 className={classnames('p-0 m-0 font-caladea text-[#965A00] text-[24px]')}>&</h1>
                <h1 className={classnames('p-0 m-0 font-caladea text-[#965A00] text-[24px]')}>ICA</h1>
                <Image
                    alt='Mountains'
                    src={flower3}
                    width={166}
                />
                <p className={classnames('font-caladea text-[14px]')}>Kehadiranmu sangat berharga bagi kami</p>
              </div>
              <div className={classnames('flex items-start flex-col mt-[19px] relative w-screen')}>
                <p className={classnames(' text-[14px]')}>Nama</p>
                {/*<input onChange={(e) => {onChangeData('nama',e.target.value)}} className={classnames('py-[5px] text-[14px] px-[16px] rounded-md border border-[#B4B4BB] mt-[8px] w-[77vw] md:w-[301px] lg:w-[301px]')} placeholder="Nama"/>*/}
                <input value={nama} onChange={e=>setNama(e.target.value)} className={classnames('py-[5px] text-[14px] px-[16px] rounded-md border border-[#B4B4BB] mt-[8px] w-[77vw] md:w-[301px] lg:w-[301px]')} placeholder="Nama"/>
              </div>
              <div className={classnames('flex items-start flex-col mt-[19px] relative w-screen')}>
                <p className={classnames(' text-[14px]')}>Ucapan</p>
                {/*<textarea onChange={(e) => {onChangeData('ucapan',e.target.value)}}  className={classnames('py-[5px] text-[14px] px-[16px] h-[125px] rounded-md border border-[#B4B4BB] mt-[8px] w-[77vw] md:w-[301px] lg:w-[301px]')} placeholder="Selamat atas pernikahannya"></textarea>*/}
                <textarea value={ucapan} onChange={e=>setUcapan(e.target.value)} className={classnames('py-[5px] text-[14px] px-[16px] h-[125px] rounded-md border border-[#B4B4BB] mt-[8px] w-[77vw] md:w-[301px] lg:w-[301px]')} placeholder="Selamat atas pernikahannya"></textarea>
              </div>
              <button type="submit"
                      className={classnames('py-[14px] w-[77vw] md:w-[301px] lg:w-[301px] mt-[42px] rounded-md relative bg-[#D49494] text-white opacity-1 hover:bg-[#e8aeae]')} >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}