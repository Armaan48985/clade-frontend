import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-auto pl-[100px] py-10 font-[500]'>
      <div>
        <div className='flex items-center gap-2'>
          <Image src='/logo.png' width={40} height={40} alt='company-logo' className='w-10 h-10 rounded-md'/>
          <p className='text-xl text-[#4F4F4F]'>Atlassian</p>
        </div>

        <div className='flex gap-28 mt-8'>
          <div className='flex flex-col gap-7'>
            <div>
              <p className='text-sm text-[var(--text-light-gray)]'>Company size</p>
              <p className='text-[16px] text-[var(--text-black)] mt-2'>1k-2k Employees</p>
            </div>
            <div>
              <p className='text-sm text-[var(--text-light-gray)]'>Sector</p>
              <p className='text-[16px] text-[var(--text-black)] mt-2'>Information Technology, Infrastructure</p>
            </div>
            <div>
              <p className='text-sm text-[var(--text-light-gray)]'>Founded In</p>
              <p className='text-[16px] text-[var(--text-black)] mt-2'>2019</p>
            </div>
          </div>

          <div className='flex flex-col gap-7'>
            <div>
              <p className='text-sm text-[var(--text-light-gray)]'>Type</p>
              <p className='text-[16px] text-[var(--text-black)] mt-2'>Private</p>
            </div>
            <div>
              <p className='text-sm text-[var(--text-light-gray)]'>Funding</p>
              <p className='text-[16px] text-[var(--text-black)] mt-2'>Bootstrapped</p>
            </div>
            <div>
              <p className='text-sm text-[var(--text-light-gray)]'>Founded By</p>
              <p className='text-[16px] text-[var(--text-black)] mt-2'>Scott Farquhar, Mike Cannon-Brookes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer