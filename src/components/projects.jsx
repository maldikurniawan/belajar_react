import React from 'react'
import ProjectItem from './projectitem'
import dinogabutImg from '../assets/dinogabut.jpg'
import datadosenImg from '../assets/datadosen.jpg'
import samakangambarImg from '../assets/samakangambar.jpg'
import sipelanImg from '../assets/kalku.jpg'

const projects = () => {
    return (
        <div id='projects' className='max-w-[1080px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum odio porro possimus nostrum quaerat, voluptates sed harum ratione nulla consequuntur! Animi corporis quidem aliquid ratione excepturi optio cum culpa?</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={sipelanImg} title='Sipelan APP' />
                <ProjectItem img={datadosenImg} title='Dados APP' />
                <ProjectItem img={dinogabutImg} title='Dino APP' />
                <ProjectItem img={samakangambarImg} title='Sambar APP' />
            </div>
        </div>
    )
}

export default projects