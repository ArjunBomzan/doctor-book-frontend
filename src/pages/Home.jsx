import React from 'react'
import Index from '../components'
import Banner from '../images/banner.png'

function Home() {
  return (
    <>

        <div className='relative'>
          <img src={Banner} />
          <div className='absolute top-80 left-10'>
            <input type='text' placeholder='Search  a doctor'
              className=' p-3' />
            <button className='bg-green-400 p-3 font-bold'>Search</button>
          </div>

        </div>

   

    </>
  )
}

export default Home