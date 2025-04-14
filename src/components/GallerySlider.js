import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/autoplay';
import Image from 'next/image';

import one from '../../public/images/gallery/1.jpg'
import two from '../../public/images/gallery/2.jpg'
import three from '../../public/images/gallery/3.jpg'
import four from '../../public/images/gallery/4.jpeg'
import five from '../../public/images/gallery/5.jpg'
import six from '../../public/images/gallery/6.jpg'
import seven from '../../public/images/gallery/7.jpg'
import eight from '../../public/images/gallery/8.jpg'
import nine from '../../public/images/gallery/9.jpg'
import ten from '../../public/images/gallery/10.jpeg'
import eleven from '../../public/images/gallery/11.jpg'
import twelve from '../../public/images/gallery/12.jpg'
import thirteen from '../../public/images/gallery/13.jpg'

const images = [one, two, three, four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen];

const GallerySlider = () => {
  return (
    <div className="gallery-slider">
      <Swiper
        modules={[Autoplay, Grid]}
        slidesPerView={4}
        grid={{
          rows: 2,
          fill: 'row',
        }}
        spaceBetween={20}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        allowTouchMove={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          467: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="image-container">
              <Image src={img} alt={`Gallery ${index}`} layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
