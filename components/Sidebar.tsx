import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-full border-l-2 h-full border-[var(--primary-gray)] pt-5 px-2 font-[500]'>
      <div className='mt-4'>
        <div className='flex-center gap-2'>
          <button className='w-44 h-11 border-[1px] border-[var(--primary-red)] bg-[#FEF4F2] rounded-lg text-[16px] text-[var(--primary-red)] flex-center gap-1'>
            <span><Image src='/delete.png' alt='delete' width={50} height={50} className='w-4 h-4'/></span>
            Delete job
          </button>

          <button className='w-44 h-11 border-[1px] border-[var(--primary-red)] bg-[var(--primary-red)] rounded-lg text-[16px] text-white flex-center gap-1'>
            <span><Image src='/edit.png' alt='delete' width={50} height={50} className='w-4 h-4'/></span>
            Edit job
          </button>
        </div>

        <div className='mt-6 px-4'>
          <div className='flex-between p-2'>
            <div className='flex gap-2'>
              <Image src='/applicants.png' alt='delete' width={50} height={50} className='w-5 h-5'/>
              <p className='text-md text-[var(--dark-gray)]'>Applicants</p>
            </div>

            <div>
              <p className='text-xl text-[var(--text-black)] font-semibold'>400</p>
            </div>
          </div>

          <div className='w-[350px] h-[1px] bg-[var(--primary-gray)] my-3'></div>


          <div className='flex-between p-2'>
            <div className='flex gap-2'>
              <Image src='/matches.png' alt='delete' width={50} height={50} className='w-5 h-5'/>
              <p className='text-md text-[var(--dark-gray)]'>Matches</p>
            </div>

            <div>
              <p className='text-xl text-[var(--text-black)] font-semibold'>100</p>
            </div>
          </div>

          <div className='w-[350px] h-[1px] bg-[var(--primary-gray)] my-3'></div>

          <div className='flex-between p-2'>
            <div className='flex gap-2'>
              <Image src='/messages.png' alt='delete' width={50} height={50} className='w-5 h-5'/>
              <p className='text-md text-[var(--dark-gray)]'>Messages</p>
            </div>

            <div>
              <p className='text-xl text-[var(--text-black)] font-semibold'>147</p>
            </div>
          </div>

          <div className='w-[350px] h-[1px] bg-[var(--primary-gray)] my-3'></div>

          <div className='flex-between p-2'>
            <div className='flex gap-2'>
              <Image src='/eye.png' alt='delete' width={50} height={50} className='w-5 h-5'/>
              <p className='text-md text-[var(--dark-gray)]'>Views</p>
            </div>

            <div>
              <p className='text-xl text-[var(--text-black)] font-semibold'>800</p>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  )
}

export default Sidebar