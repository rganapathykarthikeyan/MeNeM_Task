import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {faCommentDots, faBell} from '@fortawesome/free-regular-svg-icons'
import profilePic from '../assets/Zoro.jpg'

const Header = () => {
    return (
        <div className='flex flex-row border-b bg-black border-[#363636] h-[9vh]'>
            <div className='flex text-xl font-medium border-r basis-1/4 p-4 border-[#363636] justify-center items-center'>
                MeNeM
            </div>
            <div className='flex text-l border-r basis-1/2 p-4 border-[#363636] items-center'>
                khleokar_dashian
                <FontAwesomeIcon icon={faLock} className='ml-3 text-[#24FF00]' />
            </div>
            <div className='flex text-l basis-1/4 p-4  items-center justify-evenly'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='size-5' />
                <FontAwesomeIcon icon={faCommentDots} className='size-5' />
                <FontAwesomeIcon icon={faBell} className='size-5' />
                <div className='flex flex-row justify-center items-center'>
                    <img src={profilePic} className='size-10 rounded-full'/>
                    <div className='flex flex-col pr-2 pl-2'>
                        <div className='font-medium'>Natashia Bunny</div>
                        <div className='font-thin text-sm'>MeNeM ID</div>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} className='size-5  pl-2' />
                </div>

            </div>
        </div>
    )
}

export default Header