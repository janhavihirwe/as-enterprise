import React from 'react'
import logo from "../../assets/logo.png"
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-[#111827]'>
        <div className='flex flex-col lg:flex-row gap-y-8 gap-x-32 pt-[60px] pb-[60px] mx-auto w-[80%]'>
            <div className='w-[80%] lg:w-[20%]'>
                <img src={logo}/>
                <div className='text-[16px] font-normal leading-[24px] text-[#9CA3AF] mt-[30px] '>Your trusted partner for comprehensive IT solutions and services.</div>
                <div className='text-[16px] font-normal leading-[24px] text-[#9CA3AF] mt-[10px] w-[60%]'>Copyright © 2024 DS Enterprise. All rights reserved.</div>
            </div>
            <div >
                <div className='text-[white] text-[18px] font-[600] mb-[30px]'>Quick Links</div>
                <div className='text-[#9CA3AF] text-[16px] font-[400] flex flex-col gap-y-4'>
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Services</div>
                    <div>Contact</div>
                </div>
            </div>
            <div>
                <div className='text-[white] text-[18px] font-[600] mb-[33px]'>Contact Us</div>
                <div  className='text-[#9CA3AF] flex flex-col gap-y-4'>
                    <div className='flex gap-x-2'><FaLocationDot  className='text-[white]'/>123 Business Street, Tech Park</div>
                    <div className='flex gap-x-2'><IoMdMail className='text-[white]'/>contact@dsenterprise.com</div>
                    <div className='flex gap-x-2'><FaPhone className='text-[white]'/>+1 (555) 123-4567</div>
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