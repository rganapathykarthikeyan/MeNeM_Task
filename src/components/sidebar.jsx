import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faGauge, faCircleUser, faCalendarDays, faSpider } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'


import Naruto from '../assets/naruto.jpg'
import Ichigo from '../assets/Ichigo.jpg'
import Saitama from '../assets/saitama.jpg'

import CommentBox from './commentBox'
import ChatBox from './chatBox'
import { Link} from 'react-router-dom'

const Sidebar = () => {

    const colItems = [{
        id: 1,
        icon: faGauge,
        name: "Home Page",
        link: "/"
    },
    {
        id: 2,
        icon: faCircleUser,
        name: "Certificate",
        link: "/others"
    },
    {
        id: 3,
        icon: faCalendarDays,
        name: "Create",
        link: "/others"
    },
    {
        id: 4,
        icon: faFile,
        name: "Explore",
        link: "/others"
    },
    {
        id: 5,
        icon: faSpider,
        name: "Profile",
        link: "/others"
    },
    ]

    const dummyComment = {
        pic: Naruto,
        userName: "Naruto",
        comment: "This is a very long comment created to check if the overflow is hidden and then shown on toggle with a Read More button and this is a comment done by a user of a person you might know"
    }

    const chatDummyData = [{
        id: 1,
        userName: "Naruto",
        unreadCount: 0,
        profilePic: Naruto,
    },
    {
        id: 2,
        userName: "Ichigo",
        unreadCount: 13,
        profilePic: Ichigo
    },
    {
        id: 3,
        userName: "Saitama",
        unreadCount: 10,
        profilePic: Saitama
    },

    ]

    return (
        <div className='flex flex-col h-[100%] w-[100%] items-center justify-start'>
            <div className='bg-[#0C0C0C] w-[80%]  m-2 p-2 rounded-md flex items-center'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='size-5 mr-2 text-[#A5A5A5]' />
                <input placeholder='Search' className='bg-transparent'></input>
            </div>
            <div className='w-[80%] border-b border-[#363636]'>
                {colItems.map(item => {
                    return (
                        <Link to={item.link} key={item.id} className=' m-1 p-2 flex items-center rounded-md text-[#A5A5A5] hover:bg-[#131313]'>
                            <FontAwesomeIcon icon={item.icon} className='size-5 mr-2 ' />
                            <span className='text-l'>{item.name}</span>
                        </Link>
                    )
                })}
            </div>
            <div className=' w-[80%] mt-3'>
                <CommentBox data={dummyComment} />
            </div>
            <div className=' w-[80%] mt-3'>
                <ChatBox data={chatDummyData} />
            </div>
        </div>
    )
}

export default Sidebar