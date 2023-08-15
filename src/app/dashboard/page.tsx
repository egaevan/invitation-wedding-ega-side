'use client';
import React from 'react'
import classnames from 'classnames'
import Image from 'next/image';
import Flower from '../../../public/flower.png'
import Ring from '../../../public/ring.png'
import { useRouter, useSearchParams } from 'next/navigation';
import { TweenMax, Power3 } from 'gsap'
import {Howl, Howler} from 'howler'


export default function Page() {
  let weddingText: any = React.useRef(null)
  let assText: any = React.useRef(null)
  let containerName: any = React.useRef(null)
  let btnWedding: any = React.useRef(null)
  let imageFlower: any = React.useRef(null)
  const nav = useRouter()

  const searchParams = useSearchParams();

  const to = searchParams.get('to');


  var sound = new Howl({
    src: ['./Akad.mp3'],
    autoplay: true,
    loop:true,
    onplayerror: function() {
      sound.once('unlock', function() {
        sound.play();
      });
    }
  });
  React.useEffect(() => {
    TweenMax.to(weddingText, .8, { opacity: 1, y: -20, ease: Power3.easeOut })
    TweenMax.to(assText, .8, { opacity: 1, y: -40, delay: .3, ease: Power3.easeOut })
    TweenMax.to(containerName, .8, { opacity: 1, y: -20, delay: .3, ease: Power3.easeOut })
    TweenMax.to(btnWedding, .8, { opacity: 1, y: -20, delay: .5, ease: Power3.easeOut })
    sound.play();

  }, [])

  const btnOpen = () => {
    TweenMax.to([weddingText, containerName, btnWedding, imageFlower, assText], .8, { opacity: 0, y: 0, ease: Power3.easeOut })
    nav.push('/profile')
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
            <center> <p className={classnames('text-primary opacity-0 mt-[82px]' )} ref={item => { assText = item }}>Kpd. Bpk/Ibu/Saudara/i
              <br/>{to}</p>
            </center>
            <button className={classnames('py-[14px] min-w-[350px] mt-[0px] rounded-md relative bg-[#D49494] text-white opacity-0 hover:bg-[#e8aeae]')} onClick={() => { btnOpen() }} ref={item3 => { btnWedding = item3 }}>
              BUKA UNDANGAN
            </button>
          </div>
        </div>
      </>
  );
}