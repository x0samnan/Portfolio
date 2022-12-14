import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Social } from '../pages/api/typings'

type Props = {
    socials: Social[]
};

export default function Header({socials}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto
    z-20 xl:items-center'>
        <motion.div
        initial={{
            x:-500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
        
        {socials.map((social) => (
            <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor='transparent'
            />
        ))}
        </motion.div>

        <motion.div
        initial={{
            x:500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-400 cursor-pointer'>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            url='mailto:samnansiddique@yandex.com' />

            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                Get In Touch
            </p>
        </motion.div>
    </header>
  )
}