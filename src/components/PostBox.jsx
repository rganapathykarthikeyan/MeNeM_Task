import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faEllipsis, faChevronDown, faChevronUp, faThumbsUp as faThumbsSolidUp, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faComment, faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import img1 from '../assets/saitama.jpg'
import img2 from '../assets/naruto.jpg'
import profilePic from '../assets/Zoro.jpg'
import { useSelector } from 'react-redux'


const PostBox = ({ data, likePost, disLikePost }) => {
    const [showMore, setShowMore] = useState(false)
    const big = data.postTitle.length > 130 ? true : false;
    const toShow = data.postTitle.substring(0, 100) + "...";
    const [like, setLike] = useState(data.likedStatus);

    const changeLike = () => {
        if(like){
            setLike(false);
            disLikePost(data.postId);
        }
        else{
            setLike(true);
            likePost(data.postId)
        }
    }

    return (
        <div className='flex flex-col w-[100%] p-2 '>
            <div className='flex flex-row items-center justify-start w-[100%] '>
                <div className='flex flex-row w-[100%]'>
                    <div className='size-12 overflow-hidden rounded-full flex items-center justify-center'>
                        <img src={data.userImg} />
                    </div>
                    <div className='flex flex-col justify-center ml-2 w-[100%]'>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='text-l'>{data.userName}</div>
                            <div className='flex flex-row items-center justify-center'>
                                {data.isFriend ? <></> : <FontAwesomeIcon icon={faUserPlus} className='text-[#24FF00] size-4' />}
                                <div className='pl-3 pr-3 font-extralight text-sm'>8h</div>
                                <button><FontAwesomeIcon icon={faEllipsis} className='size-4' /></button>
                            </div>
                        </div>
                        <div className='text-xs text-[#A7A7A7]'>{data.userStatus}</div>
                    </div>
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
                    <div className='m-1 p-3 border border-[#363636] rounded-xl'>
                        {data.postTitle}
                    </div>}
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        {like ?
                            <button><FontAwesomeIcon icon={faThumbsSolidUp} className='size-4 p-3' onClick={changeLike}/></button> :
                            <button><FontAwesomeIcon icon={faThumbsUp} className='size-4 p-3' onClick={changeLike} /></button>}
                        <button><FontAwesomeIcon icon={faComment} className='size-4 p-3' /></button>
                        <button><FontAwesomeIcon icon={faPaperPlane} className='size-4 p-3' /></button>
                    </div>
                    <div className='flex flex-row text-center'>
                        <div className='size-5 overflow-hidden rounded-full border-2 border-white'>
                            <img src={img1} />
                        </div>
                        <div className='size-5 -ml-2 overflow-hidden rounded-full border-2 border-white'>
                            <img src={img2} />
                        </div>
                        <div className='text-[#676767] text-sm ml-5'>{data.likes} likes - {data.kudos} kudos </div>
                    </div>
                </div>
                <div className='hidden sm:flex flex-row border-b border-[#363636] p-3 items-center justify-between'>
                    <div className='flex flex-row basis-11/12 items-center'>
                        <div className='size-5 overflow-hidden rounded-full'>
                            <img src={profilePic} />
                        </div>
                        <input placeholder='Add a comment...' className='bg-transparent ml-2 p-2 focus:outline-none text-[#676767] text-sm placeholder:text-[#676767] placeholder:text-sm' />
                    </div>
                    <FontAwesomeIcon icon={faCirclePlus} className='size-3 p-3 basis-1/12' />
                </div>
            </div>
        </div >
    )
}

export default PostBox