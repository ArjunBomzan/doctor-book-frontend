import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { TimePicker } from 'react-ios-time-picker';
import { DatePicker } from '@julienvanbeveren/react-datetime-picker'
import { useDispatch } from 'react-redux';
import { setReduxbook } from '../redux/Slice/bookSlice';


const access_token = localStorage.getItem("token")

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let tyear = new Date().getFullYear()
let tmonth = new Date().getMonth() + 1
let tday = new Date().getDate()
let day = new Date().getDay()

function Appointment() {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [value, onChange] = useState('10:00');
  const [doctor, setDoctor] = useState({})
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState("")
  const { id } = useParams()
  const data = {
    id: id,
  }
  const fetchDoctor = async () => {
    await axios.post("http://lwww.localhost:3000/doctor",
      data,
      {
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        }

      }).then((res) => {
        setDoctor(res.data[0])

      }).catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    fetchDoctor()

  }, [])

  //data 
  let date1 = date.toString()
  let dates = date1.split(" ")

  const bookingdata = {
    doctor:doctor,
    time: time,
    date: {
      day: dates[0],
      month: dates[1],
      on: dates[2],
      year: dates[3]
    },

  }
  const handleProcessed = () => {
    dispatch(setReduxbook(bookingdata))
    navigate("/book")
  }


  return (
    <>
      <div className='container'>
        <div className='ml-40 flex                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ' >
          <img
            // src={`${doctor.img}?`} 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyc_dh38esuZqjrDsJ0uQfxhlAbFuVbl-V_uELOOFJbQ&s"
            alt='img'
            className='h-40 p-3'
          />
          <p className='font-bold m-2 text-2xl font-sans'>{doctor.name}</p>
          {/* work more with datas */}
        </div>


        <div className='flex text-center justify-between ml-40'>
          <div className='ml-3'>
            <p className='text-sm font-bold'>{tday + "/" + tmonth + "/" + tyear}</p>
            <p className='font-bold'>{days[day]}</p>
          </div>

          <div>
            <DatePicker selected={date} onChange={(date) => {
              setDate(date)
            }} />
          </div>
        </div>

        <div className='text-center'>
          <p className=' font-bold text-green-700 text-xl'>Book at</p>
          <TimePicker selected={time} value={value} onChange={(time) => {
            setTime(time)
          }} />
        </div>


      </div>
      <div className='text-right mt-10 mr-40'><button onClick={handleProcessed}
        className="bg-green-600 rounded  text-center p-2 ">
        Processed to Pay</button></div>


    </>
  )
}

export default Appointment