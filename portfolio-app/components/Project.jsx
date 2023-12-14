import React from 'react'
import superappImg from '../public/assets/projects/superapp.png'
import portfolioImg from '../public/assets/projects/Portfolio.png'
import ProjectItems from './ProjectItems'


const Project = () => {
  return (
  
    
    <div id='project' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase tracking-widest text-xl text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What Ive Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
           <ProjectItems title='Super App'
            backgroundImg={superappImg}
            projectUrl='/Super'
             title2='React JS'/>
                <ProjectItems title='Portfolio App'
            backgroundImg={portfolioImg}
            projectUrl='/Portfolio'
             title2='Next JS'/>
                <ProjectItems title='Super App'
            backgroundImg={superappImg}
            projectUrl='/super'
             title2='Next JS'/>
            </div>
        </div>
    </div>
  )
}

export default Project