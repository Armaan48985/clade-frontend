import React from 'react'
import Details from './Details'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Main = () => {
  return (
    <div>
      <div className='border-[1px] border-[var(primary-border-gray)] h-[67px] flex items-center font-[500]'>
        <ul className='flex gap-[72px] ml-[100px] h-[27px] font-[500px] text-[var(--text-dark)] text-xl'>
          <li className="font-semibold text-[var(--primary-red)] relative">
              <span className="after:absolute after:right-7 after:top-11 after:w-16 after:h-[2px] after:bg-[var(--primary-red)]"></span>
              Job Preview
          </li>
          <li>Applicants</li>
          <li>Match</li>
          <li>Messages</li>
        </ul>
      </div>

      <div className='w-full flex'>
          <div className='w-[77%]'>
            <Details/>
            <Footer/>
          </div>

          <div className='w-[23%]'>
            <Sidebar/>
          </div>
      </div>
    </div>
  )
}

export default Main