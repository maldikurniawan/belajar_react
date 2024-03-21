import React from 'react'
import WorkItem from './workitem'

const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid iure quo odit sint, eos temporibus optio possimus placeat quas quibusdam fugit, earum, nihil culpa quasi accusantium! Minima, quisquam dicta?'
    },
    {
        year: 2018,
        title: 'Google',
        duration: '2 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid iure quo odit sint, eos temporibus optio possimus placeat quas quibusdam fugit, earum, nihil culpa quasi accusantium! Minima, quisquam dicta?'
    },
    {
        year: 2017,
        title: 'Tokopedia',
        duration: '1 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid iure quo odit sint, eos temporibus optio possimus placeat quas quibusdam fugit, earum, nihil culpa quasi accusantium! Minima, quisquam dicta?'
    },
    {
        year: 2015,
        title: 'TikTok',
        duration: '2 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid iure quo odit sint, eos temporibus optio possimus placeat quas quibusdam fugit, earum, nihil culpa quasi accusantium! Minima, quisquam dicta?'
    },
]
const work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
            ))}
        </div>
    )
}

export default work