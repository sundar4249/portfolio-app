import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-[#5651e5] text-xl tracking-widest'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>I'm a software/Web developer with experience in JavaScript and TypeScript and 
                have a good knowledge of frameworks like Next.Js, Angular and llibraries like React and 
                Node.js. I'm a quick and good learner and collaborate closely with clients to create efficient, 
                scalable, and user-friendly solutions that solve real-world problems.</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest Projects</p>
            </div>
            <div className='w-full m-auto h-auto flex items-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-full' src='/../public/assets/about1.png' alt='/' width='400' height= '300'></Image>
            </div>
        </div>
    </div>
  )
}

export default About