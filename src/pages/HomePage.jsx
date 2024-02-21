import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faVideo,faCertificate } from '@fortawesome/free-solid-svg-icons'
import { faImage, faFileLines } from '@fortawesome/free-regular-svg-icons'

import { postActions } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import PostBox from '../components/PostBox'

const HomePage = () => {

  const dispatch = useDispatch();
  const posts = useSelector((state)=> state.posts);

  const likePost = ( id ) => {
    dispatch(postActions.like(id));
  }

  const disLikePost = (id) => {
    dispatch(postActions.disLike(id))
  }

  const options = [{
    id:1,
    name:"Photo",
    image: faImage,
    onPress: () => {}
  },
  {
    id:2,
    name:"Video",
    image: faVideo,
    onPress: () => {}
  },
  {
    id:3,
    name:"Certificate",
    image: faCertificate,
    onPress: () => {}
  },
  {
    id:4,
    name:"Activities",
    image: faFileLines,
    onPress: () => {}
  },

  ]

  return (
    <div className='h-[100%] flex flex-col items-center'>
      <div className='w-[90%] hidden sm:flex flex-row justify-between items-center m-3 p-2 border-b border-[#363636]'>
        <div className='basis-3/4'>
        <FontAwesomeIcon icon={faPen} className='size-5 ml-5 mr-5 text-white' />
        <input placeholder='Write Something ...' className='w-[80%] bg-transparent text-white  placeholder:text-white focus:outline-none'></input>
        </div>
        <button className='basis-1/4 text-[#2682FF] border border-[#363636] p-2 rounded-3xl'>Use MeNeM AI</button>
      </div>
      <div className='w-[90%] hidden sm:flex flex-row justify-evenly items-center'>
        {options.map(option => {
          return(
            <button key={option.id} onClick={option.onPress} className='flex flex-row items-center hover:bg-[#131313] rounded-lg  ml-3 mr-3 p-2 '>
              <FontAwesomeIcon icon={option.image} className='size-5 mr-5 text-white' />
              <span>{option.name}</span>
            </button>
          )
        })}
      </div>
      <div className='w-[100%] sm:w-[90%] flex flex-col'>
        {posts.map(post => {
          return(<PostBox data={post} key={post.postId} likePost={likePost} disLikePost={disLikePost}/>)
        })}
      </div>
    </div>
  )
}

export default HomePage