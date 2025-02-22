"use client"
import Header from '@/components/Header'
import React from 'react'

export default function Analytics() {
  return (
    <div className='bg-[#1F233B] h-auto'>
      <Header />
      <div className='max-w-7xl 2xl:max-w-[92vw] mx-auto px-4 p-20 grid grid-cols-1 md:grid-cols-10 lg:grid-cols-10 gap-x-4 gap-y-4 text-white items-center justify-center'>
        <div className='col-span-5'>
          <h1 className='font-Nunito font-bold text-6xl lg:text-8xl'>Analytics</h1>
          <p className='font-Nunito font-thin text-xl lg:text-3xl py-2 lg:py-6'>https://wesh.com/myurl</p>
          <svg width="278" height="4" viewBox="0 0 278 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="-0.00371737" y1="3.50001" x2="277.996" y2="1.4331" stroke="white" />
          </svg>
          <p className='font-Nunito font-normal w-4/6 py-4 text-lg lg:text-2xl'>See what’s working, explore your link activity, audience engagement, and traffic sources.</p>
        </div>
        <div className='col-span-5 bg-[#2C2E45] h-64 lg:h-80 rounded-md text-center flex flex-col justify-around font-Nunito p-4'>
          <div className='w-46 lg:w-80 border border-[#F5F5F5] mx-auto p-2 rounded-lg'>
            <h2 className='text-3xl lg:text-5xl font-bold text-[#F5F5F5] text-opacity-75'>Total Clicks</h2>
          </div>
          <p className='text-7xl lg:text-[8rem] font-bold text-[#FFD460]'>100</p>
          <p className='font-bold text-xl'>Your links been clicked 100 times!</p>
        </div>
        <div className='col-span-5 md:col-span-3 bg-[#2C2E45] h-64 md:h-48 lg:h-64 text-center flex flex-col justify-around items-center font-Nunito p-4 rounded-md'>
          <div className='border-b border-[#F5F5F5]'>
            <h3 className='text-3xl font-bold '>Top Link</h3>
          </div>
          <p className='font-Nunito text-2xl md:text-lg lg:text-2xl font-light'>https://wesh.com/myurl</p>
          <svg width="32" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.3333 19.8889V31.2222C29.3333 32.2241 28.9353 33.185 28.2268 33.8935C27.5184 34.602 26.5575 35 25.5556 35H4.77778C3.77585 35 2.81496 34.602 2.10649 33.8935C1.39801 33.185 1 32.2241 1 31.2222V10.4444C1 9.44251 1.39801 8.48161 2.10649 7.77314C2.81496 7.06467 3.77585 6.66666 4.77778 6.66666H16.1111" stroke="#DCDCDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M23.6665 1H34.9998V12.3333" stroke="#DCDCDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.2222 21.7778L34.9999 1" stroke="#DCDCDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className='col-span-5 md:col-span-4 bg-[#2C2E45] h-64 md:h-48 lg:h-64 text-center flex flex-col justify-around items-center font-Nunito p-4 rounded-md'>
          <div className='border-b border-[#F5F5F5]'>
            <h3 className='text-3xl font-bold'>Referer</h3>
          </div>
          <p className='font-Nunito text-2xl font-light'>https://www.google.com</p>
          <svg width="50" height="40" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50.9897 15.7233L41.5439 5.59828C41.3856 5.42923 41.1943 5.29445 40.9818 5.20229C40.7693 5.11013 40.5402 5.06256 40.3086 5.0625H26.2222L26.1691 1.58203C26.1691 0.70875 25.4131 0 24.4816 0C23.5501 0 22.8995 0.70875 22.8995 1.58203L22.8481 5.0625H4.24512C3.31277 5.0625 2.55762 5.81766 2.55762 6.75V27C2.55762 27.9323 3.31277 28.6875 4.24512 28.6875H22.8253V52.418C22.8253 53.2912 23.5813 54 24.5128 54C25.4443 54 26.2003 53.2912 26.2003 52.418V28.6875H40.3087C40.777 28.6875 41.2233 28.4934 41.5431 28.1517L50.9889 18.0267C51.5938 17.3779 51.5938 16.3721 50.9897 15.7233ZM39.5754 25.3125H5.93256V8.4375H39.5754L47.4476 16.875L39.5754 25.3125Z" fill="#EBEBEB" />
          </svg>
        </div>
        <div className='col-span-5 md:col-span-3 bg-[#2C2E45]  h-64 md:h-48 lg:h-64 text-center flex flex-col justify-around items-center font-Nunito p-4 rounded-md'>
          <div className='border-b border-[#F5F5F5]'>
            <h3 className='text-3xl font-bold mt-2'>Geo location</h3>
          </div>
          <p className='font-Nunito text-base md:text-sm md:py-1 lg:py-0 lg:text-lg text-pretty font-light'>Discover where in the world your clicks come from.</p>
          <p className='font-Nunito text-2xl font-bold'>China</p>
          <svg className='mb-2' width="54" height="48" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.9998 62.3333C49.6483 62.3333 62.3332 49.6485 62.3332 34C62.3332 18.3515 49.6483 5.66666 33.9998 5.66666C18.3513 5.66666 5.6665 18.3515 5.6665 34C5.6665 49.6485 18.3513 62.3333 33.9998 62.3333Z" stroke="#CDCDD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.08301 35.4167L22.6663 41.0833L19.833 51L22.6663 59.5M48.1663 58.0833L46.7497 51L39.6663 48.1667V38.25L48.1663 35.4167L60.9163 36.8333M53.833 15.5833L52.4163 19.8333L42.4997 21.25V29.75L49.583 26.9167H55.2497L60.9163 29.75M7.08301 29.75L14.1663 24.0833L21.2497 22.6667L26.9163 14.1667L24.083 8.5" stroke="#CDCDD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

