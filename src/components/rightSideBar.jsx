import React from 'react'
import profilePic from '../assets/Zoro.jpg'

import Naruto from '../assets/naruto.jpg'
import Ichigo from '../assets/Ichigo.jpg'
import Saitama from '../assets/saitama.jpg'

const suggestedDummyData = [{
  id: 1,
  userName: "Naruto",
  booted: true,
  profilePic: Naruto,
  status: 'Follows you'
},
{
  id: 2,
  userName: "Ichigo",
  booted: false,
  profilePic: Ichigo,
  status: 'Follows you'
},
{
  id: 3,
  userName: "Saitama",
  booted: false,
  profilePic: Saitama,
  status: 'Suggested for you'
},
]

const RightSideBar = () => {
  return (
    <div className='p-5 flex flex-col w-[90%]'>
      <div className='font-bold text-2xl'>Trending Feeds</div>
      <div className='pt-5 pb-5'>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center'>
            <div className='size-8 overflow-hidden rounded-full'>
              <img src={profilePic} />
            </div>
            <div className='flex flex-col justify-center ml-2'>
              <div className='text-l'>Roronoa Zoro</div>
              <div className='text-xs text-[#A7A7A7]'>Universal Traveler</div>
            </div>
          </div>
          <button className='text-[#214E7E]'>Switch</button>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
          <div className='text-[#999999] font-medium'>Suggested for you</div>
          <button className='text-white text-xs font-medium'>Show All</button>
        </div>
        {suggestedDummyData.map(account => {
          return (
            <div key={account.id} className='flex flex-row items-center justify-between'>
              <div className='flex flex-row items-center pt-2 pb-2'>
                <div className='size-8 overflow-hidden rounded-full'>
                  <img src={account.profilePic} />
                </div>
                <div className='flex flex-col justify-center ml-2'>
                  <div className='text-l'>{account.userName}</div>
                  <div className='text-xs text-[#A7A7A7]'>{account.status}</div>
                </div>
              </div>
              {account.booted ? 
              <button className='bg-[#2681FF] text-white rounded-lg h-8 w-20'>Boosting</button>: 
              <button className='bg-transparent text-white border-2 rounded-lg h-8 w-20 border-white'>Boost</button>
              }
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default RightSideBar