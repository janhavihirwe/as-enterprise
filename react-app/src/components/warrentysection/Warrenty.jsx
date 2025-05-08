import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

function Warrenty({onContactClick}) {
  return (
    <div className='mx-auto  mt-[30px] pt-[50px] bg-[#F9FAFB] pb-[50px]'>
        <div className='text-[30px] font-bold leading-[38px] mx-auto text-center'>Warranty Plans</div>
        <div className='flex  flex-col gap-y-6 lg:flex-row lg:w-[70%] mx-auto gap-x-6 mt-[30px] w-[85%]'>
            <div className='border border-[#E5E7EB] rounded-[8px] w-[100%] h-[570px] p-[30px]'>
                <div className='text-[22px] font-[600] leading-[32px] flex items-center gap-x-2'><MdOutlineSecurity className='text-[#6B7280]'/>Onsite Support</div>
                <div className='text-[16px] font-normal leading-[24px] text-[#4B5563] mt-4'>Economic-Best Seller</div>
                <div className='mt-[40px]'>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/>Parts & Labor</div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/>Basic Phone support for hardware Issues</div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/><div><b>Faster</b> repairs done at your location</div></div>
                </div>
                <button className='bg-[#312E81] rounded-[4px] text-[#FFFFFF] w-[100%] h-[40px] flex items-center justify-center lg:mt-[255px] mt-[230px] gap-x-2 cursor-pointer' onClick={()=>onContactClick()}><MdOutlineSecurity className='text-[#FFFFFF] '/>Get Quote</button>
            </div>
            <div className=' relative border-2 border-[#2563EB] rounded-[8px] w-[100%] h-[570px] p-[30px] bg-[#EFF6FF]'>
            <div className='absolute top-[-0px] right-[-2px] bg-[#2563EB] text-white text-[14px] font-semibold px-3 py-1 rounded-tr-lg rounded-bl-lg shadow w-[80px] h-[28px] text-center'>Popular</div>
                <div className='text-[22px] font-[600] leading-[32px] flex items-center gap-x-2 w-[auto]'><MdOutlineSecurity className='text-[#6B7280]'/>Premium/Premier Support</div>
                <div className='text-[16px] font-normal leading-[24px] text-[#4B5563] mt-2'>Faster Support-Dedicated</div>
                <div className='mt-[20px]'>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/><div><b>Prioritized</b> Parts & Labor</div></div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/><div><b>Advanced</b> Phone support from Lenevo Engineers</div> </div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/><div><b>Fastest</b> repairs done at your location, Next Business Day</div></div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/><b>Comprehensive Hardware & Sotware Support</b></div>
                </div>
                <button className='bg-[#312E81] rounded-[4px] text-[#FFFFFF] w-[100%] h-[40px] flex items-center justify-center lg:mt-[170px] mt-[150px] gap-x-2 cursor-pointer' onClick={()=>onContactClick()}><MdOutlineSecurity className='text-[#FFFFFF] '/>Get Quote</button>
            </div>
            <div className='border border-[#E5E7EB] rounded-[8px] w-[100%] lg:h-[570px] h-[620px] p-[30px]'>
                <div className='text-[24px] font-[600] leading-[32px] flex items-center gap-x-2'><MdOutlineSecurity className='text-[#6B7280]'/>Premium/Premier Plus</div>
                <div className='text-[16px] font-normal leading-[24px] text-[#4B5563] mt-2'>Optimum-Extra Care</div>
                <div className='mt-[20px]'>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/><div><b>All benefits of Premium Care</b> included</div></div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/><div><b>Fastest repairs</b> at your location, next business day, with<b> prioritized parts & labor</b></div></div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/><div><b>Accidental Damage Protection</b><div className='text-red-500'>(Can claim 30 days after purchase)</div></div></div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/><div><b>Smart Performance</b> - automated PC performance & network optimization with malware removal</div></div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/><div><b>Extended</b> Battery Warranty</div></div>
                    <div className='flex items-center gap-x-2 mb-[8px]'><MdOutlineDone className='text-[green]'/><div><b>Data Migration</b> Support</div></div>
                    <div className='flex items-center gap-x-2 mb-[8px] text-[14px]'>*Depending uponlocation & parts availability</div>
                </div>
                <button className='bg-[#312E81] rounded-[4px] text-[#FFFFFF] w-[100%] h-[40px] flex items-center justify-center mt-[20px] gap-x-2 cursor-pointer' onClick={()=>onContactClick()}><MdOutlineSecurity className='text-[#FFFFFF] '/>Get Quote</button>
            </div>
        </div>
    </div>
  )
}

export default Warrenty