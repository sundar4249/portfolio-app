import Image from 'next/image'
import React, { useRef } from 'react'
import {FaGithub, FaLinkedinIn, FaFacebook} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import contactImg from '../public/assets/contact.png'
// import Link from 'next/link'
import { Link } from 'react-scroll'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_Alis4249', 'template_y1hf8z9', form.current, 'S3Be8ZwG1d6IFIBvT')
          .then((result) => {
              alert('Message sent');
          }, (error) => {
              alert('please fill the valid details');
          });
          e.target.reset()
      };

  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest text-[#5651e5] uppercase'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
            {/* ...................left...............     */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='hover:scale-105 ease-in duration-300 rounded-xl' src={contactImg} alt='/'/>
                        </div>
                        <div>
                            <h2 className='py-2'>Sundar Chaudhary</h2>
                            <p className='text-gray-700'>Front-End Developer</p>
                            <p className='py-4 text-gray-700'>I am available for freelance or full-time positions. Contact me and lets talk.</p>
                        </div>
                        <div>
                        <p className='uppercase pt-8'>Connect With Me</p>
                        <div className='flex items-center justify-between py-4'>
                            <a href='https://www.linkedin.com/in/sundar-chaudhary-78588622a/'
                           target='_blank'
                           rel='noreferrer'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaLinkedinIn/>
                </div>
                </a>
                <a  href='https://github.com/sundar4249'
            target='_blank'
            rel='noreferrer'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaGithub/>
                </div>
                </a>
                <a href='https://www.facebook.com/alis.chaudhary4249/'  target='_blank'
            rel='noreferrer'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaFacebook/>
                </div>
                </a>
                <a href='mailto:adoring.alis4249@gmail.com'
                >
                <div className='rounded-full  shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsFillPersonLinesFill/>
                </div>
                </a>
                        </div>
                        <a href='/CURRICULAM_NEW-UPDATED.pdf'
                        download={true}>
                            <button  className='text-gray-100 p-4 w-auto flex justify-center items-center mt-4 hover:scale-105 ease-in duration-300'>Download Resume</button> 
                        </a>
                    </div>

                    </div>
        

                </div>
                {/* ........................right side......... */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='grid grid-cols-2 gap-5 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase py-2 text-sm'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-400' type='text' name='user_name'/>

                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase py-2 text-sm'>Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-400' type='number'
                                    name='user_number' />
                                </div>

                            </div>
                            <div className='flex flex-col py-2'>
                            <label className='uppercase py-2 text-sm'>Email</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-400' type='email'
                            name='user_email' />
                            </div>
                            <div className='flex flex-col py-2'>
                            <label className='uppercase py-2 text-sm'>Subject</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-400' type='text' name='subject' />
                            </div>
                            <div className='flex flex-col py-2'>
                            <label className='uppercase py-2 text-sm'>Message</label>
                            <textarea className='border-2 rounded-lg shadow-gray-400 p-3' rows='10' name='message'/>
                            </div>
                            <div className='flex justify-center'>
                            <button className='text-gray-100 p-4 w-auto flex justify-center mt-4 hover:scale-105 ease-in duration-300'>Send Message</button> 
                            </div>
                            
                        </form>

                    </div>

                </div>

            </div>
            <div className='flex justify-center py-12'> 
                <Link to='home' spy={true} smooth={true} offset={-100} duration={500}>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-[#5651e5]' >
                    <HiOutlineChevronDoubleUp size={30} />
                </div>
                </Link>
            </div>

        </div>

    </div>
  )
}

export default Contact