import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function ContactUs() {
  return (
    <div className='bg-[#F9FAFB] pt-[50px] mt-[50px] pb-[50px]'>
        <div className='text-[30px] font-bold text-center'>Contact Us</div>
        <div className='flex flex-col lg:flex-row w-[80%] gap-y-4 lg:w-[80%] mx-auto gap-x-14 mt-[15px]'>
            <div className='w-[100%]'>
                <div>
                    <div>Name</div>
                    <input type='text' className='border border-[ #D1D5DB] rounded-[6px] w-[100%] h-[42px] mb-[15px]'/>
                </div>
                <div>
                    <div>Email</div>
                    <input type='email' className='border border-[ #D1D5DB] rounded-[6px] w-[100%] h-[42px] mb-[15px]'/>
                </div>
                <div>
                    <div>Phone</div>
                    <input type='phone' className='border border-[ #D1D5DB] rounded-[6px] w-[100%] h-[42px] mb-[15px]'/>
                </div>
                <div>
                    <div>Message</div>
                    <textarea className='border border-[ #D1D5DB] rounded-[6px] w-[100%] h-[114px] mb-[15px]'/>
                </div>
                <button className='text-white text-[16px] font-[500] rounded-[4px] bg-black w-[100%] h-[40px] cursor-pointer'>Send Message</button>
            </div>
            <div className='w-[100%] flex flex-col gap-y-[20px]'>
                <div className='text-[20px] font-[600] mt-[20px]'>Get in Touch</div>
                <div className='text-[16px] font-[400] flex gap-x-2 items-center'><FaLocationDot/>#193, Channsandra Village, Uttarahalli Hobli,Kengeri Main Road Bangalore Karnataka-560061 GST -27AAQFD4355D1ZD</div>
                <div className='text-[16px] font-[400] flex gap-x-2 items-center'><FaPhone/>9742377772 9164341481</div>
                <div className='text-[16px] font-normal flex gap-x-2 items-center'><IoMdMail/>sales@asenterprisesindia.co.in</div>
                <div className="w-[90%] lg:w-[80%] lg:h-[192px] sm:h-[450px] overflow-hidden rounded-[8px] shadow-md mt-[20px] ml-[10px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124444.19426254115!2d77.32921249726559!3d12.9153646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f27e1c77e6f%3A0xdf4be035c9b20d9e!2sKengeri%20Sub%20Post%20Office!5e0!3m2!1sen!2sin!4v1746011013292!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs