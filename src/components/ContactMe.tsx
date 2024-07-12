'use client'

import React from 'react'
import {SignupFormDemo} from "@/components/Contactfrom"

const ContactMe = () => {
  return (
      <div className='"md:h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full  items-start justify-start my-40'>
          <h2 className='text-4xl md:text-[6rem] font-bold  leading-none mb-7 mt-[50px]'>Contact <span className='text-4xl font-semibold text-white mb-6'>Me</span> </h2>
          <div className="p-20 md:flex justify-between w-full">
              <div >
                  <SignupFormDemo />
              </div>
              <div>
                  <h2 className='text-4xl md:text-[2rem] font-bold  leading-none mb-7 '>Address</h2>
                  <p>H No - A/30, Nishant Colony, Loni Dehat, Ghaziabad, Uttar Pradesh </p>
                  <p>Pin Code - 201102</p>
                <p className='flex items-center'><img src="/phone.svg" className='w-14 m-3' alt="" /> +91 7827808430</p>
                <p className='flex items-center'><img src="/mail.svg" className='w-14 m-3' alt="" /> abhaysharma7435@gmail.com</p>
                <p className='flex items-center'><img src="/Linkedin.svg" className='w-14 m-3' alt="" /> <a href="www.linkedin.com/in/abhay74" target='blank'>Abhay Sharma</a></p>
                <p className='flex items-center'><img src="/github.svg" className='w-14 m-3' alt="" /> <a href="https://github.com/abhay5624" target='blank'>Abhay Sharma</a></p>
              </div>
          </div>  
          
      </div>
  )
}

export default ContactMe