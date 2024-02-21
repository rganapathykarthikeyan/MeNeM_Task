import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const ChatBox = (props) => {
    return (
        <>
            <div className='flex flex-row text-l p-2 font-bold border border-[#363636] rounded-t-md justify-between'>
                <span>Chit Chat</span>
                <button className='flex bg-[#111111] rounded-md items-center justify-center'><FontAwesomeIcon icon={faEllipsis} className='size-5 p-1' /></button>
            </div>
            <div className='border border-[#363636] rounded-b-md'>
                {props.data.map(user => {return(
                    <div className='flex flex-row items-center justify-between mr-1' key={user.id}>
                    <div className='flex flex-row items-center p-2'>
                        <div className='size-10 overflow-hidden rounded-full'>
                            <img src={user.profilePic} />
                        </div>
                        <span className='ml-2'>{user.userName}</span>
                    </div>
                    {user.unreadCount !== 0 ? <div className='border border-[#363636] rounded-lg p-1'>{user.unreadCount}</div>:<></>}
                </div>
                )})}
            </div>
        </>
    )
}

export default ChatBox