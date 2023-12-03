import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const access_token = localStorage.getItem("token  ")


function Doctors() {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {

        axios.get("http://lwww.localhost:3000/doctors", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then((res) => {
            setDoctors(res.data.data)
            console.log(res.data)
        })
    }, [])
    const Doctor = (props) => {
        return <>
            <div className='border-2 border-gray-400 w-64 m-3 p-4 rounded-2xl'>
                <div className='flex'>
                    <img className="h-[80px] w-[80px] rounded-full m-1" src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699142400&semt=ais' />
                    <div className='m-3 '>
                        <p className='font-bold text-[#3da496]'>{props.name}</p>
                        <p>Consultant</p>
                    </div>


                </div>
              
               <Link to={`/appointment/${props.id}`}
                    className='bg-[#2f9ab7] p-1 m-1 rounded text-white hover:bg-violet-600  '>
                    Book appointment 
                    </Link>
            </div >
        </>
    }

    return (
        <>
            <div className='grid grid-cols-4  '>
                {
                    doctors.map((data) => {
                        return <Doctor
                            key={data._id}
                            name={data.name}
                            id={data._id}
                        />
                    })
                }

            </div>

        </>


    )
}

export default Doctors