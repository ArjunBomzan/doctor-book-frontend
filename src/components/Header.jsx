

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logoutReduxUser } from '../redux/Slice/userSlice';

function Header() {
const dispatch=useDispatch()
  const reduxUser = useSelector((global) => {
    return global.user.value
  })

  function handleLogout() {
    dispatch(logoutReduxUser())
  }

  return (
    <div className='container m-4'>
      <div className='flex justify-around'>
        <p className='text-green-700 font-bold font-[] text-2xl'>Mero

          <span className='text-blue-600'>Clinic</span></p>
        <div>
          <Link to="/doctors" className='text-2xl font-bold '>Doctors</Link>
        </div>
        {


          <div className='flex gap-9'>

            {
              reduxUser?.name
            }
            {
              reduxUser ? <button
                className=' bg-blue-600 p-2 rounded text-white font-bold'
                onClick={handleLogout}
              >Logout</button> :
                <Link to={"/login"} className=' bg-blue-600 p-2 rounded text-white font-bold' >
                  Login
                </Link>
            }



            {/* <Link to={user ? `/${user._id}` : "/resgister"} className='p-2 font-bold' >{user ? `${user.name}` : "Register"}</Link> */}
          </div>
        }

      </div>

    </div>
  )
}

export default Header