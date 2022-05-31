import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Slider ({className, slides}){
  return  (
    <Swiper
        className={className}
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
    >
    {
      slides.map((slide, index) => {
        return <SwiperSlide key={ index }>
          { slide }
        </SwiperSlide>
      })
    }
  </Swiper>
  )
}
