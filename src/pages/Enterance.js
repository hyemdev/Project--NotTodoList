import React from 'react'
import { Link } from 'react-router-dom'
import man1 from "../pages/man1.png"
import man2 from "../pages/man2.png"
import man3 from "../pages/man3.png"
import man4 from "../pages/man4.png"
import woman1 from "../pages/woman1.png"
import woman2 from "../pages/woman2.png"
import woman3 from "../pages/woman3.png"
import woman4 from "../pages/woman4.png"

const Enterance = () => {
  return (
    <div>
      <h4 className='text-center text-[#000000] text-l mt-36 mb-12 text-xl'>캐릭터를 선택하세요.</h4>
      <div className='mt-4 border mb-20 w-1/2 h-96 mx-auto border-black flex-1'>
        <ul className='flex flex-wrap p-16 gap-11 mt-3.5'>
          <li>
            <input type="checkbox" className='float-left'/>
            <img src={man1} alt="man1" className='w-28 h-20 cursor-pointer'/>
          </li>
          <li>
            <input type="checkbox" className='float-left'/>
            <img src={man2} alt="man1" className='w-28 h-20 cursor-pointer'/>
          </li>
          <li>
            <input type="checkbox" className='float-left'/>
            <img src={man3} alt="man1" className='w-28 h-20 cursor-pointer'/>
          </li>
          <li>
            <input type="checkbox" className='float-left'/>
            <img src={man4} alt="man1" className='w-28 h-20 cursor-pointer'/>
          </li>
          <li>
            <input type="checkbox" className='float-left'/>
            <img src={woman1} alt="man1" className='w-28 h-20 cursor-pointer'/>
          </li>
          <li>
            <input type="checkbox" className='float-left'/>
            <img src={woman2} alt="man1" className='w-28 h-20 cursor-pointer'/>
          </li>
          <li>
            <input type="checkbox" className='float-left'/>
            <img src={woman3} alt="man1" className='w-28 h-20 cursor-pointer'/>
          </li>
          <li>
            <input type="checkbox" className='float-left'/>
            <img src={woman4} alt="man1" className='w-28 h-20 cursor-pointer'/>
          </li>
        </ul>
        
      </div>
      <h4 className='text-center  text-[#000000
      ] mb-12 text-xl'>닉네임을 입력하세요.</h4>
      <div className='  text-center'>
      <input type="text" className='rounded-md placeholder="Input Text" mr-24 w-64 h-12 text-3xl'/>
        <Link to="/main" className='bg-slate-500  text-white p-4 rounded-md'>ENTER</Link>
        </div>
      </div>
  )
}

export default Enterance