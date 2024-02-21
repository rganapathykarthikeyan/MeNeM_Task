import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const CommentBox = (props) => {
    const [show, setShow] = useState(false);
    const [showMore, setShowMore] = useState(false)
    const big = props.data.comment.length > 100 ? true : false;
    const toShow = props.data.comment.substring(0, 100) + "..."
    const icon = show ? faChevronUp : faChevronDown;
    return (
        <>
            <div className='flex flex-row text-l p-2 font-bold border border-[#363636] rounded-t-md justify-between'>
                <span>People you may know</span>
                <button className='flex bg-[#111111] rounded-md items-center justify-center'><FontAwesomeIcon icon={faEllipsis} className='size-5 p-1' /></button>
            </div>
            <div className='border border-[#363636] rounded-b-md'>
                <div className='flex flex-row items-center justify-between mr-1'>
                    <div className='flex flex-row items-center p-2'>
                        <div className='size-10 overflow-hidden rounded-full'>
                            <img src={props.data.pic} />
                        </div>
                        <span className='ml-2'>{props.data.userName}</span>
                    </div>
                    <button onClick={() => { setShow(pre => !pre) }} className='hover:bg-[#131313]'><FontAwesomeIcon icon={icon} className='size-4 p-1' /></button>
                </div>
                {show && <div className='w-[100%] flex justify-center bg-[#101010] rounded-md p-3 border-2 text-xs border-[#555555]'>
                    {big ? showMore ? <div>
                        {props.data.comment}
                        <button onClick={() => { setShowMore(false) }} className='underline text-[#6C6C6C] flex items-center'>Read Less <FontAwesomeIcon icon={faChevronUp} className='size-3 p-1' /></button>
                    </div> : <div>
                        {toShow}
                        <button onClick={() => { setShowMore(true) }}  className='underline text-[#6C6C6C] flex items-center'>Read More <FontAwesomeIcon icon={faChevronDown} className='size-3 p-1' /></button>
                    </div> : <div>
                        {props.data.comment}
                    </div>
                    }
                </div>}
            </div>
        </>
    )
}

export default CommentBox;