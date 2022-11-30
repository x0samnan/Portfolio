import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial= {{ opacity:0 }}
    whileInView= {{ opacity:1 }}
    transition= {{ duration:1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.5,
        }}
        whileInView={{ opacity:1, x:0 }}
        viewport={{ once:true }}
        src="https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-95 md:h-64 xl:w-[600px] xl:h-[500px]'
        />
        
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-[#0BDA51]'>
                    little
                </span> about me
            </h4>
            <p className='text-base'>
                I am Samnan Siddique. A normal sophomore who is interested in Development.
                I love full stack development implementing technologies like ReactJs, MongoDB, ExpressJs
                , Sanity. I am currently pursuing my Bachelors degree in Computer Science and Engineering.
                I have made projects like WeatherForecast App using React and Twitter Bot using Python.
            </p>
        </div>
    </motion.div>
  )
}

export default About