import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSquarePlus, faCertificate, } from '@fortawesome/free-solid-svg-icons'
import { faStar, faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const footerData = [
    {id:1, icon:faHouse, link:'/'},
    {id:2, icon:faCertificate, link:'/others'},
    {id:3, icon:faSquarePlus, link:'/others'},
    {id:4, icon:faStar, link:'/others'},
    {id:5, icon:faCommentDots, link:'/others'},
]

const Footer = () => {
  return (
    <div className='flex flex-row justify-evenly items-center border-t border-[#363636] bg-black w-[100%] h-16'>
        {footerData.map(data => {return(
            <div key={data.id}>
                <Link to={data.link}><FontAwesomeIcon icon={data.icon} className='size-5 mr-2' /></Link>
            </div>
        )})}
    </div>
  )
}

export default Footer