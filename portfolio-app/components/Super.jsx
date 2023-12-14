import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import superImg from '../public/assets/projects/superapp.png'
import Link  from 'next/link';
import { useState } from 'react';

const Super = () => {
  const [dropDown, setdropDown] = useState(false)
  const handledropDown = () => {
    setdropDown(!dropDown)
  }


  return (
    <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10 '/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={superImg} alt='/'/>
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%]
             translate-y-[-50%] text-white p-2 z-10'>
                <h2 className='py-2'>Super App</h2>
                <h3>React JS / Material UI / Node Js / Express Js / MongoDB</h3>
            </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='uppercase tracking-widest text-[#5651e5] text-xl'>Project</p>
          <h2>Overview</h2>
          <p>
            This Super App is bulit using React JS, Mongo DB, Express Node JS. This is ride sharing and delivery app.
            This app have Multi user login function for user, admin and rider.
            As admin can add, update and delete the product. Admin can also cance the oder placed by users.
            User have to signup and logi in order to create the order. Rider also need t create the account inorder to
            to pick the oder placed by users. Google Api is also integrated in this app to place the order in the
            exact location of the user. Socket.io is also integrated for bi-directional communication.
          </p>
          <a
            href='https://github.com/sundar4249/superApp'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300'>Code</button>
          </a>
          <a
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 hover:scale-105 ease-in duration-300'>Demo</button>
          </a>
        </div>
        <div>
        <div className= {dropDown? 'col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4': 'hidden'}>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies Used</p>
            <div className='grid grid-cols-1 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Material UI
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express & MongoDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Socket.io
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Multer
              </p>
            </div>
            
          </div>
        </div>
        <div className='text-gray-100 p-4 w-auto flex justify-center mt-4' >
        <button className='text-gray-100 p-4 w-auto flex justify-center mt-4 hover:scale-105 ease-in duration-300' onClick={handledropDown}>{dropDown? 'Click To Close' : 'Click Me'}</button>
        </div>
       
        </div>
        
      </div>
      <Link href='/#project'>
          <p className='underline cursor-pointer absolute px-4 pb-10 text-[#5651e5] tracking-wider'>Back To Project</p>
        </Link>
           
        </div>
  )
}

export default Super