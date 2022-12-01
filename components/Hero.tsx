import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { PageInfo } from '../pages/api/typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter ({
        words: [
          `Hi, It is ${pageInfo?.name}`,
          `Just a Normal Developer,`, 
          `Who Loves Networking and Security`, 
          `And Some Iced Coffee`,
        ],
        loop: true,
        delaySpeed: 1750,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircles />
        <img
          className='relative rounded-full h-32 w-32 mx-auto object-cover'
          src={urlFor(pageInfo?.heroImage).url()}
          />
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[12px]'>
            Full Stack Developer
          </h2>
          <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
              <span className='mr-3'>
                {text}
              </span>
              <Cursor cursorColor='#0FFF50' />
          </h1>
          <div className='pt-5'>
            <Link href={'#about'}>
              <button className='heroButton'>About</button>
            </Link>
            <Link href={'#skills'}>
              <button className='heroButton'>Skills</button>
            </Link>
            <Link href={'#projects'}>
              <button className='heroButton'>Projects</button>
            </Link>
            <Link href={'#experience'}>
              <button className='heroButton'>Experience</button>
            </Link>
            <Link href={'#contact'}>
              <button className='heroButton'>Contact</button>
            </Link>
          </div>
        </div>
    </div>
  );
}