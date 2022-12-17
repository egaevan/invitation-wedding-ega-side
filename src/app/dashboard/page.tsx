'use client';
import React from 'react'
import classnames from 'classnames'
import Image from 'next/image';
import Flower from '../../../public/flower.png'
import Ring from '../../../public/ring.png'
import { useRouter } from 'next/navigation';
import { TweenMax, Power3 } from 'gsap'


export default function Page() {
  let weddingText: any = React.useRef(null)
  let containerName: any = React.useRef(null)
  let btnWedding: any = React.useRef(null)
  let imageFlower: any = React.useRef(null)
  const router = useRouter()


  React.useEffect(() => {
    TweenMax.to(weddingText, .8, { opacity: 1, y: -20, ease: Power3.easeOut })
    TweenMax.to(containerName, .8, { opacity: 1, y: -20, delay: .3, ease: Power3.easeOut })
    TweenMax.to(btnWedding, .8, { opacity: 1, y: -20, delay: .5, ease: Power3.easeOut })
  }, [])

  const btnOpen = () => {
    TweenMax.to([weddingText, containerName, btnWedding, imageFlower], .8, { opacity: 0, y: 0, ease: Power3.easeOut })
    router.push('/profile')

  }



  return (
    <>
      <div className={classnames(' flex  min-h-screen min-w-screen justify-center items-center flex-col')}>
        <div className={classnames('max-w-[350px] flex flex-col items-center justify-center')}>
          <p className={classnames('text-primary opacity-0')} ref={item => { weddingText = item }}>THE WEDDING</p>
          <div className={classnames('w-[350px] h-[418px] relative mt-[1em]')}>
            <Image src={Flower} object-fit="fill" alt="flower-image" ref={item2 => { imageFlower = item2 }} />
            <div className={classnames('absolute flex flex-col top-[150px] left-0 right-0 ml-auto mr-auto text-center opacity-0')} ref={item2 => { containerName = item2 }}>
              <h1 className={classnames('text-title text-[40px] leading-[150%] tracking-[0.3em]')}>EGA</h1>
              <div className={classnames('w-[39px] h-[43px] text-center flex items-center justify-center ml-auto mr-auto')}>
                <Image src={Ring} object-fit='fill' alt="ring-image" />
              </div>
              <h1 className={classnames('text-title text-[40px] leading-[150%] tracking-[0.3em]')}>ICA</h1>
            </div>
          </div>
          <button className={classnames('py-[14px] min-w-[350px] mt-[82px] rounded-md relative bg-[#D49494] text-white opacity-0 hover:bg-[#e8aeae]')} onClick={() => { btnOpen() }} ref={item3 => { btnWedding = item3 }}>
            BUKA UNDANGAN
          </button>
        </div>
      </div>
    </>
  );
}