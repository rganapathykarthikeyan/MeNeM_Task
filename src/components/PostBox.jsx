import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faEllipsis, faChevronDown, faChevronUp, faThumbsUp as faThumbsSolidUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faComment, faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import img1 from '../assets/saitama.jpg'
import img2 from '../assets/naruto.jpg'

const PostBox = ({ data }) => {
    const [showMore, setShowMore] = useState(false)
    const big = data.postTitle.length > 130 ? true : false;
    const toShow = data.postTitle.substring(0, 100) + "...";

    return (
        <div className='flex flex-col w-[100%]'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row basis-10/12'>
                    <div className='size-12 overflow-hidden rounded-full'>
                        <img src={data.userImg} />
                    </div>
                    <div className='flex flex-col justify-center ml-2'>
                        <div className='text-l'>{data.userName}</div>
                        <div className='text-xs text-[#A7A7A7]'>{data.userStatus}</div>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-end basis-2/12'>
                    {data.isFriend ? <></> : <FontAwesomeIcon icon={faUserPlus} className='text-[#24FF00] size-5 p-3' />}
                    <div className='p-3 font-extralight text-sm'>8h</div>
                    <button><FontAwesomeIcon icon={faEllipsis} className='size-5 p-3' /></button>
                </div>
            </div>
            <div>
                {data.postPhoto && big ?
                    (!showMore ?
                        <div>
                            <div className=' p-3'>{toShow}
                                <button onClick={() => { setShowMore(true) }} className='underline text-[#6C6C6C] flex items-center'>Read More <FontAwesomeIcon icon={faChevronDown} className='size-3 p-1' /></button>
                            </div>
                            <img src={data.postPhoto} className='w-[100%] p-3' />

                        </div> :
                        <div>
                            <div className='p-3'>
                                {data.postTitle}
                                <button onClick={() => { setShowMore(false) }} className='underline text-[#6C6C6C] flex items-center'>Read Less <FontAwesomeIcon icon={faChevronUp} className='size-3 p-1' /></button>
                            </div>
                            <img src={data.postPhoto} className='w-[100%] p-3' />
                        </div>
                    ) :
                    <div className='m-2 p-3 border border-[#363636] rounded-xl'>
                        {data.postTitle}
                    </div>}
            </div>
            <div>
                <div>
                    <div>
                    {data.likedStatus ? 
                    <button><FontAwesomeIcon icon={faThumbsSolidUp} className='size-5 p-3' /></button> : 
                    <button><FontAwesomeIcon icon={faThumbsUp} className='size-5 p-3' /></button>}
                    <button><FontAwesomeIcon icon={faComment} className='size-5 p-3' /></button>
                    <button><FontAwesomeIcon icon={faPaperPlane} className='size-5 p-3' /></button>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default PostBox