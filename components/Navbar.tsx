import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[107px] py-6 px-6 sticky top-0 left-0 z-10 bg-white shadow-sm shadow-gray-300 font-[500]'>
      <div className='flex-between h-[61px] ml-5'>
        <div className='bg-[var(--primary-gray)] w-[100px] h-full flex-center'>
          <p className='text-[var(--primary-red)] font-bold text-xl'>Login</p>
        </div>

        <div className='w-[538px] flex-between border-[0.5px] text-[#888888] border-[var(--primary-border-gray)] rounded-[36px] text-xl h-[74px] px-3'>
            <div className='bg-[var(--primary-red)] border-2 border-[var(--light-red)] flex-center gap-2 text-white rounded-[49px] w-[109px]  h-[58px]'>
              <Image src='/jobs.png' width={40} height={40} alt='logo' className=' w-6 h-6' />
              <p className=''>Jobs</p>
            </div>

            <div className='flex-center text-[var(--text-gray)] gap-1 relative'>
              <Image src='/message.png' width={40} height={40} alt='logo' className='w-6 h-6' />
              <Image src='/red-dot.png' width={40} height={40} alt='logo' className='absolute top-[2px] left-[18px] w-[6px] h-[6px]' />
              <p>Messages</p>
            </div>

            <div className='flex-center text-[var(--text-gray)] gap-1'>
              <Image src='/coins-hand.png' width={40} height={40} alt='logo' className=' w-6 h-6' />
              <p>Payments</p>
            </div>
        </div>

        <div className='flex-center gap-3'>
          <div className='relative'>
            <Image src='/bell-02.png' width={40} height={40} alt='logo' className='w-8 h-8' />
            <Image src='/red-dot.png' width={40} height={40} alt='logo' className='absolute top-[-1px] left-[21px] w-[6px] h-[6px]' />
          </div>
          <Image src='/logo.png' width={40} height={40} alt='logo' className=' w-10 h-10 rounded-full' />
          <Image src='/chevron-down.png' width={40} height={40} alt='logo' className=' w-5 h-5' />
        </div>
      </div>
    </div>
  )
}

export default Navbar