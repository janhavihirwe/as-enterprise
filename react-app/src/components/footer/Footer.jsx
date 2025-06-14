import React, { useState } from 'react'
import logo from "../../assets/A S Entriprise.png"
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Footer({onAboutClick, onServicesClick, onContactClick}) {
    const navigate=useNavigate()
  return (
    <div className='bg-[#111827]'>
        <div className='flex flex-col lg:flex-row gap-y-8 gap-x-32 pt-[60px] pb-[60px] mx-auto w-[80%]'>
            <div className='w-[80%] lg:w-[20%]'>
                <img src={logo} className='h-[100px]'/>
                <div className='text-[16px] font-normal leading-[24px] text-[#9CA3AF] mt-[30px] '>Your trusted partner for comprehensive IT solutions and services.</div>
                <div className='text-[16px] font-normal leading-[24px] text-[#9CA3AF] mt-[10px] w-[75%]'>Copyright © 2025 AS Enterprise. All rights reserved.<br/>Developed by <a href="https://www.thewebsort.com/" target="_blank" rel="noopener noreferrer" className='underline cursor-pointer' >Websort.</a><a onClick={()=>navigate("/privacy")} className='underline cursor-pointer'> Privacy policy</a></div>
            </div>
            <div >
                <div className='text-[white] text-[18px] font-[600] mb-[30px]'>Quick Links</div>
                <div className='text-[#9CA3AF] text-[16px] font-[400] flex flex-col gap-y-4'>
                    <div className="cursor-pointer"onClick={() => {
              navigate("/")
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>Home</div>
                    <div className="cursor-pointer" onClick={() => {
              onAboutClick();
            }}>About Us</div>
                    <div className="cursor-pointer" onClick={() => {
              onServicesClick();
            }}>Services</div>
                    <div  className="cursor-pointer"onClick={() => {
              onContactClick();
            }}>Contact</div>
                </div>
            </div>
            <div>
                <div className='text-[white] text-[18px] font-[600] mb-[33px]'>Contact Us</div>
                <div  className='text-[#9CA3AF] flex flex-col gap-y-4'>
                    <div className='flex gap-x-2'><FaLocationDot  className='text-[white]'/>#193, Channsandra Village, Uttarahalli Hobli,<br/>Kengeri Main Road Bangalore Karnataka-560061 <br/>GST -27AAQFD4355D1ZD</div>
                    <div className='flex gap-x-2'><IoMdMail className='text-[white]'/>sales@asenterprisesindia.co.in</div>
                    <div className='flex gap-x-2'><FaPhone className='text-[white]'/>9742377772 9164341481</div>
                </div>
            </div>
            <div>
                <div className='text-[white] text-[18px] font-[600] mb-[30px]'>Follow Us</div>
                <div className='text-[#9CA3AF] flex flex-col gap-y-4'>
                    <div className='flex gap-x-2 items-center'><FaFacebookF className='text-[white]'/>Facebook</div>
                    <div className='flex gap-x-2 items-center'><FaTwitter className='text-[white]'/>Twitter</div>
                    <div className='flex gap-x-2 items-center'><FaInstagram className='text-[white]'/>Instagram</div>
                    <div className='flex gap-x-2 items-center'><FaLinkedinIn className='text-[white]'/>LinkedIn</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer