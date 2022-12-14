import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../pages/api/typings';
import { urlFor } from '../sanity';

type Props = {
    skill: Skill;
    directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -50 : 50,
                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity:1, x: 0 }}
            src={urlFor(skill.image).url()}
            className="rounded-full border border-gray-500 object-cover w-10 h-10 md:w-15 md:h-15
            xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transtion duration-300 ease-out
        group-hover:bg-white h-10 w-10 md:w-15 md:h-15 xl:w-20 xl:h-20 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                    {skill.progress}%
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill