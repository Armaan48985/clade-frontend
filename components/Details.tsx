import Image from 'next/image'
import React from 'react'

const Details = () => {
  return (
    <div className='flex flex-col font-medium'>
        {/* first section */}
        <div className='border-b-2 border-[var(--light-border-gray)] pl-[100px] py-10'>
          <div className=' '>
            <div className='flex items-center gap-2'>
              <h1 className='text-4xl text-[var(--text-black)] font-semibold'>Senior Product Designer</h1>

              <Image src='/gray-dot.png' width={10} height={10} alt='dot' className='w-1 h-1'/>

              <p className='text-[var(--text-dark)] text-sm'>Posted 2 days ago</p>

              <div className='border-[1px] border-[var(--light-green)] rounded-full bg-[var(--very-light-green)] flex-center gap-2 px-2'>
                <Image src='/green-dot.png' width={10} height={10} alt='dot' className='w-[6px] h-[6px]'/>
                <p className='text-[12px] text-[var(--primary-green)]'>Open</p>
              </div>
            </div>

            <div className='mt-5 flex items-center gap-5'>
              <div className='flex-center gap-2'>
                <Image src='/location.png' width={20} height={20} alt='company-logo' className='w-4 h-4'/>
                <p className='text-xl text-[var(--light-black)]'>Delaware, USA</p>
              </div>

              <Image src='/gray-dot.png' width={10} height={10} alt='dot' className='w-1 h-1'/>

              <div className='flex-center gap-2'>
                <Image src='/coins.png' width={20} height={20} alt='company-logo' className='w-4 h-4'/>
                <p className='text-xl text-[var(--light-black)]'>$300K-$400K</p>
              </div>
            </div>
          </div>
        </div>

        {/* second section */}
        <div className='border-b-2 border-[var(--light-border-gray)] py-10 pl-[100px]'>
          <div className='w-[872px] h-[115px] flex items-start justify-between'>
              <div className='flex flex-col gap-3'>
                <h3 className='text-sm text-[var(--text-light-gray)]'>skills required</h3>
                <div className='w-max border-[1px] border-[var(--light-border-gray)] flex rounded-md gap-1 py-1 px-1'>
                  <Image src='/figma.png' width={40} height={40} alt='skill' className='w-4 h-4'/> 
                  <p className='text-[12px] text-[var(--text-dark-blue)]'>Figma</p>
                </div>
                <div className='w-max border-[1px] border-[var(--light-border-gray)] flex rounded-md gap-1 py-1 px-1'>
                  <Image src='/ai.png' width={40} height={40} alt='skill' className='w-4 h-4'/> 
                  <p className='text-[12px] text-[var(--text-dark-blue)]'>Adobe illustrator</p>
                </div>
                <div className='w-max border-[1px] border-[var(--light-border-gray)] flex rounded-md gap-1 py-1 px-1'>
                  <Image src='/xd.png' width={40} height={40} alt='skill' className='w-4 h-4'/> 
                  <p className='text-[12px] text-[var(--text-dark-blue)]'>Adobe XD</p>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='text-sm text-[var(--text-light-gray)]'>Preferred Language</h3>
                <p className='text-lg text-[var(--text-black)] font-semibold'>English</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='text-sm text-[var(--text-light-gray)]'>Type</h3>
                <p className='text-lg text-[var(--text-black)] font-semibold'>Full time</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='text-sm text-[var(--text-light-gray)]'>Years of Experience</h3>
                <p className='text-lg text-[var(--text-black)] font-semibold'>3+ Years of Experience</p>
            </div>
          </div>
        </div>

        {/* third section */}
        <div className='border-b-2 border-[var(--light-border-gray)] pl-[100px] py-10 font-medium'>
          <div className=''>
              <p className='text-sm text-[var(--text-light-gray)]'>About the job</p>
              <div className='mt-2 text-[16px] text-[var(--text-black)] flex flex-col gap-1'>
                <p>1. Handle the UI/UX research design</p>
                <p>2. Work on researching on latest web applications designs & trends</p>
                <p>3. Work on conceptualizing and visualizing</p>
                <p>4. Work on creating graphics content and other graphic related works</p>
                <p>Benefits: </p>
                <p>&#8226; Health Insurance</p>
                <p>&#8226; Provident Fund</p>
                <p>Schedule: </p>
                <p>&#8226; Day shift</p>
                <p>Supplemental pay types: </p>
                <p>&#8226; Performance bonus</p>
                <p>&#8226; Yearly bonus</p>
                <p>Work Location: In person</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Details