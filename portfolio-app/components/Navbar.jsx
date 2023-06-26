import Image from 'next/image'
import React from 'react'
import {Link} from 'react-scroll'
import { useState, useEffect } from 'react'
import {AiOutlineCloseCircle, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [NavShadow, setNavShadow] = useState(false)
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
        window.addEventListener('scroll',handleNavShadow)
    }, [])
    
    const handleNav = () =>{
        setNav(!nav)
    }

    const handleNavShadow = () => {
        if(window.scrollY>=90){
            setNavShadow(true)
        }else{
            setNavShadow(false)
        }
    }

  return (
    <div className={NavShadow? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <Image src='/../public/assets/navLogo.gif' alt='/' width='80' height='50' className='cursor-pointer'/>
            </Link>
            
            <div>
            <ul className='hidden md:flex'>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link to="project" spy={true} smooth={true} offset={-100} duration={500}>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                    <li className='ml-10 text-sm uppercase hover:border-b'>contact</li>
                </Link>
            </ul>
            <div className='md:hidden cursor-pointer' onClick={handleNav}>
                <AiOutlineMenu size={25}/>
            </div>
            
        </div>
        </div>
        <div className={nav? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link onClick={()=>setNav(false)}>
                        <Image src='/../public/assets/navLogo.gif' alt='' width='87' height='35' className='cursor-pointer'/>
                        </Link>
                        
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineCloseCircle/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md-w[90%] py-4'> <span className='text-[#5651e5]'>{greeting}</span>, Welcome To My Portfolio</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm'>About</li>
                        </Link>
                        <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link to="project" spy={true} smooth={true} offset={-100} duration={500}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-5'>
                        <p className='uppercase tracking-widest text-[#44b9c2]'>Let's Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'> 
                            <FaLinkedinIn/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'> 
                            <FaGithub/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'> 
                            <SiGmail/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'> 
                            <BsFillPersonLinesFill/>
                            </div>
   
                        </div>
                    </div>

                </div>

            </div>

        </div>
     


    </div>
  )
}

export default Navbar