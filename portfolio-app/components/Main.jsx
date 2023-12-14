import React from 'react'
import { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Main = () => {
    const [greeting, setgreeting] = useState()
    useEffect(()=>{
        let curDate = new Date()
        curDate = curDate.getHours()
        if(curDate<12){
            setgreeting("Good Moring")
        }else if(curDate >= 12 && curDate <= 18){
            setgreeting("Good Afternoon")
        }else{
            setgreeting("Good Evening")
            
        }
    }, [])


  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <p className='uppercase text-xl tracking-widest text-gray-600'><span className='text-[#5651e5] text-xl'>{greeting}</span><br/> Welcome To My Portfolio</p>
            <h2>Hi, Im 
            <span className='text-[#5651e5]'>
            <Typewriter
            words={['Sundar Chaudhary', 'B.S.C.IT Graduate', 'MERN Developer', 'React/Next js Developer']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />   
            </span></h2>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>Hello! I am Sundar Chaudhary. Currently, focused on building responsive front-end web
            applications while learning back-end technologies.</p>
            <div className='flex max-w-[330px] m-auto py-4 items-center justify-between'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaLinkedinIn/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaGithub/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <SiGmail/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsFillPersonLinesFill/>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Main