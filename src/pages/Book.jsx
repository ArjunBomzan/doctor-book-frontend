import React from 'react'
import { useSelector } from 'react-redux'
import bookSlice from '../redux/Slice/bookSlice'

function Book() {
    const data = useSelector((global) => {
        return global.book.value
    })
    console.log(data)
    return (
        <>
        
                <p className='font-bold text-green-700 text-xl m-8 text-center'>Boking Details</p>
         
            <div className='flex justify-center'>

                <div>
                    <label className='font-bold'>Doctor:</label>
                    <p className='ml-5'>{data.doctor.name}</p>
                    <label className='font-bold'>Date:</label>
                    <p className='ml-5'>{data.date.on}/{data.date.month}/{data.date.year}</p>
                    <label className='font-bold'>Day:</label>
                    <p className='ml-5'>{data.date.day}</p>
                </div>


                <div>esewa detail</div>
            </div>
            
        </>

    )
}

export default Book