import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

function Warrenty() {
  return (
    <div className='mx-auto  mt-[30px] pt-[50px] bg-[#F9FAFB] pb-[50px]'>
        <div className='text-[30px] font-bold leading-[38px] mx-auto text-center'>Warranty Plans</div>
        <div className='flex  flex-col gap-y-6 lg:flex-row w-[70%] mx-auto gap-x-6 mt-[30px]'>
            <div className='border border-[#E5E7EB] rounded-[8px] w-[100%] h-[100%] p-[30px]'>
                <div className='text-[24px] font-[600] leading-[32px] flex items-center gap-x-2'><MdOutlineSecurity className='text-[#6B7280]'/>Standard</div>
                <div className='text-[16px] font-normal leading-[24px] text-[#4B5563]'>1 Year Coverage</div>
                <div className='mt-[20px]'>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/>Basic repair service</div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/>Phone support</div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/>Email support</div>
                </div>
                <button className='bg-[#312E81] rounded-[4px] text-[#FFFFFF] w-[100%] h-[40px] flex items-center justify-center mt-[85px] gap-x-2 cursor-pointer'><MdOutlineSecurity className='text-[#FFFFFF] '/>Get Quote</button>
            </div>
            <div className=' relative border-2 border-[#2563EB] rounded-[8px] w-[100%] h-[100%] p-[30px] bg-[#EFF6FF]'>
            <div className='absolute top-[-0px] right-[-2px] bg-[#2563EB] text-white text-[14px] font-semibold px-3 py-1 rounded-tr-lg rounded-bl-lg shadow w-[80px] h-[28px] text-center'>Popular</div>
                <div className='text-[24px] font-[600] leading-[32px] flex items-center gap-x-2'><MdOutlineSecurity className='text-[#6B7280]'/>Extended</div>
                <div className='text-[16px] font-normal leading-[24px] text-[#4B5563]'>2-3 Years Coverage</div>
                <div className='mt-[20px]'>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/>Full repair service</div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/>Parts replacement</div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/>Priority support</div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/>24/7 assistance</div>
                </div>
                <button className='bg-[#312E81] rounded-[4px] text-[#FFFFFF] w-[100%] h-[40px] flex items-center justify-center mt-[50px] gap-x-2 cursor-pointer'><MdOutlineSecurity className='text-[#FFFFFF] '/>Get Quote</button>
            </div>
            <div className='border border-[#E5E7EB] rounded-[8px] w-[100%] h-[100%] p-[30px]'>
                <div className='text-[24px] font-[600] leading-[32px] flex items-center gap-x-2'><MdOutlineSecurity className='text-[#6B7280]'/>Premium</div>
                <div className='text-[16px] font-normal leading-[24px] text-[#4B5563]'>4+ Years Coverage</div>
                <div className='mt-[20px]'>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/>Full protection</div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/>Priority support</div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/>Loaner device</div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/>On-site support</div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/>Data recovery</div>
                </div>
                <button className='bg-[#312E81] rounded-[4px] text-[#FFFFFF] w-[100%] h-[40px] flex items-center justify-center mt-[20px] gap-x-2 cursor-pointer'><MdOutlineSecurity className='text-[#FFFFFF] '/>Get Quote</button>
            </div>
        </div>
    </div>
  )
}

export default Warrenty