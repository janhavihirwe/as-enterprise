import React from 'react'
import demo from "../../assets/demoimg.png"
import fairfield from "../../assets/fairfield.jfif"
import qentelli from "../../assets/qenteli.avif"
import westlin from "../../assets/westin.png"
import sunquest from "../../assets/sunquest.jfif"
import perusal from "../../assets/perusal.png"
import amps from "../../assets/amps.jfif"
import stpi from "../../assets/stpi.jpg"
import protivity from "../../assets/protiviti.png"
import kingfish from "../../assets/kingfish.png"
import reddy from "../../assets/reddy.png"
import ctrl from "../../assets/ctrl.png"
import gypetine from "../../assets/gypelite.png"
import orchid from "../../assets/Orchid.webp"
import icrw from "../../assets/icrw.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function Clients() {
  return (
    <div className='mx-auto text-center mt-[30px] bg-[#F9FAFB] p-[45px]'>
        <div className='text-[30px] font-bold leading-[36px]'>Our Trusted Clients</div>
        <Swiper
  modules={[Autoplay]}
  loop={true}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  spaceBetween={50}
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  }}
  className="w-[90%] mx-auto mt-[5%]"
>
  {[
    fairfield, qentelli, westlin, sunquest, perusal, amps,
    stpi, protivity, kingfish, reddy, ctrl, gypetine, orchid, icrw
  ].map((img, idx) => (
    <SwiperSlide
      key={idx}
      className="flex justify-center items-center h-[120px]"
    >
      <div className="w-auto h-[80px] flex items-center justify-center">
        <img
          src={img}
          alt={`partner-${idx}`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>


        <div className='text-[16px] font-normal leading-[24px] mt-[5%] text-[#4B5563]'>Trusted by leading companies across various industries</div>
    </div>
  )
}

export default Clients