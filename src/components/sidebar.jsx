import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faGauge, faCircleUser, faCalendarDays, faSpider } from '@fortawesome/free-solid-svg-icons'
import {faFile} from '@fortawesome/free-regular-svg-icons'

import CommentProfile from '../assets/naruto.jpg'
import CommentBox from './commentBox'

const Sidebar = () => {

    const colItems = [{
        id: 1,
        icon: faGauge,
        name: "Home Page"
    },
    {
        id: 2,
        icon: faCircleUser,
        name: "Certificate"
    },
    {
        id: 3,
        icon: faCalendarDays,
        name: "Create"
    },
    {
        id: 4,
        icon: faFile,
        name: "Explore"
    },
    {
        id: 5,
        icon: faSpider,
        name: "Profile"
    },
    ]

    const dummyComment = {
        pic: CommentProfile,
        userName: "Naruto",
        comment: "This is a very long comment created to check if the overflow is hidden and then shown on toggle with a Read More button and this is a comment done by a user of a person you might know"
    }

    return (
        <div className='flex flex-col h-[100%] w-[100%] items-center justify-evenly'>
                <div className='bg-[#0C0C0C] w-[80%]  m-3 p-2 rounded-md flex items-center'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='size-5 mr-2 text-[#A5A5A5]' />
                    <input placeholder='Search' className='bg-transparent'></input>
                </div>
                <div className='w-[80%] border-b border-[#363636]'>
                    {colItems.map(item => {return (
                        <div key={item.id} className=' m-2 p-2 flex items-center rounded-md text-[#A5A5A5]'>
                            <FontAwesomeIcon icon={item.icon} className='size-5 mr-2 ' />
                            <span className='text-l'>{item.name}</span>
                        </div>
                    )})}
                </div>
                <div className=' w-[80%] mt-1'>
                    <CommentBox data={dummyComment}/>
                </div>
                <div>
                    
                </div>
        </div>
    )
}

export default Sidebar