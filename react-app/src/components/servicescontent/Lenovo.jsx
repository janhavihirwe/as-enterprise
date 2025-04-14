import React from 'react'
import bg from "../../assets/bglenovo.png"
import security from "../../assets/security.png"
import setting from "../../assets/setting.png"
import insight from "../../assets/insight.png"
import malware from "../../assets/malware.png"
import star from "../../assets/star1.png"
import electricity from "../../assets/electricity.png"
import support from "../../assets/support.png"

function Lenovo() {
  return (
            <div>
                        <div style={{
                            position: "relative",
                            backgroundImage:`url(${bg})`,
                            backgroundSize: 'cover',
                            width:"100%",
                            height:"367px",
                            textAlign:"center"
                        }}>
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                height:"367px",
                                background: 'rgba(0, 0, 0, 0.6)',
                            }}
                        />
                        <div style={{ position: 'relative', zIndex: 1,paddingTop:"80px"}}>
                            <div className='text-[#FFFFFF] text-[25px] lg:text-[40px] font-[700] lg:leading-[48px] lg:w-[45%] mx-auto'>Official Lenovo Products for Business & Personal Use</div>
                            <div className='text-[#E5E7EB] text-[20px] font-[400] leading-[28px]  mx-auto mt-[20px]'>Discover top-tier Lenovo devices backed by our expert support and enterprise-grade services</div>
                            <button className='text-[#FFFFFF] text-[16px] font-[500] leading-[24px] bg-[#312E81] w-[176px] h-[52px] mt-[30px]'>Get Quote</button>
                        </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-x-6 w-[95%] mx-auto mt-[80px] items-center gap-y-6'>
                            <div className='border border-[#E5E7EB] p-[15px] rounded-[8px] shadow-sm lg:w-[30%] w-[85%]'>
                                <img src={security}/>
                                <div className='font-[18px] font-[600] leading-[28px]'>ThinkPad & IdeaPad Laptops</div>
                                <div className='text-[16px] font-[400] leading-[24px] text-[#4B5563] w-[80%]'>Rugged performance for professionals, students, and creatives.</div>
                            </div>
                            <div className='border border-[#E5E7EB] p-[15px] rounded-[8px] shadow-sm lg:w-[30%] w-[85%]'>
                                <img src={setting}/>
                                <div className='font-[18px] font-[600] leading-[28px]'>ThinkCentre & Legion Desktops</div>
                                <div className='text-[16px] font-[400] leading-[24px] text-[#4B5563] w-[90%]'>Business desktops to high-performance gaming and creator PCs.</div>
                            </div> 
                            <div className='border border-[#E5E7EB] p-[15px] rounded-[8px] shadow-sm lg:w-[30%] w-[85%]'>
                                <img src={insight}/>
                                <div className='font-[18px] font-[600] leading-[28px]'>Servers & Storage</div>
                                <div className='text-[16px] font-[400] leading-[24px] text-[#4B5563] w-[85%]'>Enterprise-grade server systems for reliable infrastructure.</div>
                            </div>
                            <div className='border border-[#E5E7EB] p-[15px] rounded-[8px] shadow-sm lg:w-[30%] w-[85%]'>
                                <img src={malware}/>
                                <div className='font-[18px] font-[600] leading-[28px]'>Monitors & Accessories</div>
                                <div className='text-[16px] font-[400] leading-[24px] text-[#4B5563] w-[80%]'>HD/4K displays, docks, keyboards, mice, and more.</div>
                            </div>
                        </div>
                        <div className='mt-[100px] mb-[100px]'>
                            <div className='text-[25px] lg:text-[30px] font-[700] leading-[36px] text-center'>Why Choose Our Maintenance Services?</div>
                            <div className='flex flex-col lg:flex-row gap-x-[140px] w-[85%] mx-auto mt-[60px] gap-y-6'>
                                <div className='flex flex-col items-center text-center lg:w-[30%]'>
                                    <img src={star}/>
                                    <div className='text-[20px] font-[600] leading-[18px] mt-[15px]'>Certified Product Experts</div>
                                    <div className='text-[#4B5563] text-[16px] font-[400] mt-[15px] '>Get help choosing the right Lenovo product for your needs.</div>
                                </div>
                                <div className='flex flex-col items-center text-center lg:w-[30%]'>
                                    <img src={electricity}/>
                                    <div className='text-[20px] font-[600] leading-[18px] mt-[15px]'>Easy Financing & Leasing Options</div>
                                    <div className='text-[#4B5563] text-[16px] font-[400] mt-[15px]'>EMI plans and corporate financing available.</div>
                                </div>
                                <div className='flex flex-col items-center text-center lg:w-[30%]'>
                                    <img src={support}/>
                                    <div className='text-[20px] font-[600] leading-[18px] mt-[15px]'>Onsite Setup & Configuration</div>
                                    <div className='text-[#4B5563] text-[16px] font-[400] mt-[15px]'>Professional delivery, installation, and onboarding support.</div>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default Lenovo