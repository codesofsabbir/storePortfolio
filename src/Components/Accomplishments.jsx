'use client'
import React from 'react'
import CountUp from 'react-countup';
function Accomplishments() {
    const accomplishments = [
    {
      number: "03",
      plus: "+",
      title: "Years Experience"
    },
    {
      number: "07",
      plus: "",
      title: "Completed Projects"
    },
    {
      number: "03",
      plus: "",
      title: "Happy Customers"
    },
    {
      number: "00",
      plus: "",
      title: "Honors and Awards"
    }
  ]
  return (
    <div 
      className="w-full mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
        {accomplishments.map((dt, index)=>{
          return(
            <div className='flex flex-col md:flex-row items-center md:gap-2' key={index}>
              <h2 className='activeText font-semibold md:text-[20px]'>0<CountUp delay={1.2} end={dt.number} duration={3} />{dt.plus}</h2>
              <h2 className='titleText text-xs md:text-base'>{dt.title}</h2>
            </div>
          )
        })}
    </div>
  )
}

export default Accomplishments