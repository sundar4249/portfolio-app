import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest text-[#5651e5] uppercase'>Skils</p>
            <h2 className='py-4'>What I can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                   <div className='grid justify-center items-center grid-cols-2'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/angular1.png' width='300' height='300' alt='/' />
                    </div>
                    <div className='flex flex-col justify-center items-center uppercase text-gray-500'>Angular
                    </div>

                   </div>

                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                   <div className='grid justify-center items-center grid-cols-2'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/html.png' width='300' height='300' alt='/' />
                    </div>
                    <div className='p-2 flex flex-col justify-center items-center uppercase text-gray-500'>Html
                    </div>

                   </div>

                </div>
                 <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                   <div className='grid justify-center items-center grid-cols-2'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/nextjs1.png' width='300' height='300' alt='/' />
                    </div>
                    <div className='flex flex-col justify-center items-center uppercase text-gray-500'>Next.Js
                    </div>

                   </div>

                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                   <div className='grid justify-center items-center grid-cols-2'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/nodejs1.png' width='300' height='300' alt='/' />
                    </div>
                    <div className='flex flex-col justify-center items-center uppercase text-gray-500'>node.Js
                    </div>

                   </div>

                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                   <div className='grid justify-center items-center grid-cols-2'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/react2.png' width='300' height='300' alt='/' />
                    </div>
                    <div className='flex flex-col justify-center items-center uppercase text-gray-500'>react
                    </div>

                   </div>

                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                   <div className='grid justify-center items-center grid-cols-2'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/tailwind1.png' width='300' height='300' alt='/' />
                    </div>
                    <div className='flex flex-col justify-center items-center uppercase text-gray-500'>tailwind
                    </div>

                   </div>

                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                   <div className='grid justify-center items-center grid-cols-2'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/git1.png' width='300' height='300' alt='/' />
                    </div>
                    <div className='flex flex-col justify-center items-center uppercase text-gray-500'>GitHub
                    </div>

                   </div>

                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                   <div className='grid justify-center items-center grid-cols-2'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/js1.png' width='300' height='300' alt='/' />
                    </div>
                    <div className='flex flex-col justify-center items-center uppercase text-gray-500'>javascript
                    </div>

                   </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills