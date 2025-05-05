import React from 'react'
import bg from "../../assets/bgwarranty.png"
import security from "../../assets/security.png"
import setting from "../../assets/setting.png"
import insight from "../../assets/insight.png"
import malware from "../../assets/malware.png"
import star from "../../assets/star1.png"
import electricity from "../../assets/electricity.png"
import support from "../../assets/support.png"
import Warrenty from '../warrentysection/Warrenty'
import { useNavigate } from 'react-router-dom'

function Warranty() {
    const navigate=useNavigate()
  return (
    <div>
            <div style={{
    position: "relative", // this makes overlay positioning local
    backgroundImage:`url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width:"100%",
    height:"367px",
    textAlign:"center"
}}>
  {/* Overlay */}
  <div
    style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        zIndex: 0
    }}
  />
  
  {/* Content above overlay */}
  <div style={{ position: 'relative', zIndex: 1, paddingTop:"80px"}}>
      <div className='text-[#FFFFFF] text-[25px] lg:text-[40px] font-[700] leading-[48px]'>
          Warranty & Protection Plans
      </div>
      <div className='text-[#E5E7EB] text-[20px] font-[400] leading-[28px] lg:w-[40%] mx-auto mt-[20px]'>
          Safeguard your devices with flexible Lenovo warranty and accidental damage protection
      </div>
      <button className='text-[#FFFFFF] text-[16px] font-[500] leading-[24px] bg-[#312E81] w-[176px] h-[52px] mt-[30px]' onClick={() => navigate('/?scrollToContact=true')}>
          Get Quote
      </button>
  </div>
</div>

            <div className='flex flex-col lg:flex-row gap-x-6 w-[95%] mx-auto mt-[80px] items-center gap-y-6'>
                <div className='border border-[#E5E7EB] p-[15px] rounded-[8px] shadow-sm lg:w-[30%] w-[85%]'>
                    <img src={security}/>
                    <div className='font-[18px] font-[600] leading-[28px]'>Standard Warranty Extension</div>
                    <div className='text-[16px] font-[400] leading-[24px] text-[#4B5563] w-[80%]'>Extend your 1-year base warranty up to 3 or 5 years.</div>
                </div>
                <div className='border border-[#E5E7EB] p-[15px] rounded-[8px] shadow-sm lg:w-[30%] w-[85%]'>
                    <img src={setting}/>
                    <div className='font-[18px] font-[600] leading-[28px]'>Accidental Damage Protection </div>
                    <div className='text-[16px] font-[400] leading-[24px] text-[#4B5563] w-[90%]'>Covers drops, spills, cracks, and electrical damage.</div>
                </div> 
                <div className='border border-[#E5E7EB] p-[15px] rounded-[8px] shadow-sm lg:w-[30%] w-[85%]'>
                    <img src={insight}/>
                    <div className='font-[18px] font-[600] leading-[28px]'>Premier Support Plan</div>
                    <div className='text-[16px] font-[400] leading-[24px] text-[#4B5563] w-[85%]'>Prioritized service with 24/7 direct access to Lenovo experts.</div>
                </div>
                <div className='border border-[#E5E7EB] p-[15px] rounded-[8px] shadow-sm lg:w-[30%] w-[85%]'>
                    <img src={malware}/>
                    <div className='font-[18px] font-[600] leading-[28px]'>International Warranty Upgrade</div>
                    <div className='text-[16px] font-[400] leading-[24px] text-[#4B5563] w-[80%]'>Travel or relocate with confidence — stay covered worldwide.</div>
                </div>
            </div>
            <Warrenty/>
            <div className='mt-[100px] mb-[100px]'>
                <div className='text-[25px] lg:text-[30px] font-[700] leading-[36px] text-center'>Why Choose Our Maintenance Services?</div>
                <div className='flex flex-col lg:flex-row gap-x-[140px] w-[85%] mx-auto mt-[60px] gap-y-6'>
                    <div className='flex flex-col items-center text-center lg:w-[30%]'>
                        <img src={star}/>
                        <div className='text-[20px] font-[600] leading-[18px] mt-[15px]'>Warranty Experts</div>
                        <div className='text-[#4B5563] text-[16px] font-[400] mt-[15px] '>We guide you in choosing the right protection for your needs.</div>
                    </div>
                    <div className='flex flex-col items-center text-center lg:w-[30%]'>
                        <img src={electricity}/>
                        <div className='text-[20px] font-[600] leading-[18px] mt-[15px]'>Quick Claim Resolution</div>
                        <div className='text-[#4B5563] text-[16px] font-[400] mt-[15px]'>Get faster service with our support handling the process.</div>
                    </div>
                    <div className='flex flex-col items-center text-center lg:w-[30%]'>
                        <img src={support}/>
                        <div className='text-[20px] font-[600] leading-[18px] mt-[15px]'>Bundle & Save</div>
                        <div className='text-[#4B5563] text-[16px] font-[400] mt-[15px]'>Combine warranty with your Lenovo purchase and get discounted pricing.</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Warranty