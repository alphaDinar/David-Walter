'use client'
import { MdArrowForward, MdLocationPin, MdSchedule } from 'react-icons/md';
import styles from '../home.module.css';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css/effect-cube';
import 'swiper/css';
import { useEffect, useRef } from 'react';
import Image from 'next/image';


const ProjectBox = () => {
  const leftSwiper = useRef<{ swiper: any }>({ swiper: null });
  const midSwiper = useRef<{ swiper: any }>({ swiper: null });
  const rightSwiper = useRef<{ swiper: any }>({ swiper: null });
  const sample = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1708685111/david%20walter/1663602608_qm3pde.png';
  const sample2 = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1708685432/david%20walter/1663602565_fmkqje.png';
  const sample3 = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1708685877/david%20walter/pent4-scaled-1_jl59js.jpg';
  const images = [sample, sample2];

  const places = [
    { tag: 'Achimota school Footbridge', location: 'Achimota School', time: '3 years ago', url: sample, url2: sample },
    { tag: 'University of Ghana - Legon Hostel', location: 'University of Ghana - Legon', time: '3 years ago', url: sample2, url2: sample3 },
  ]

  useEffect(() => {
  }, [])

  const handleSwiper = () => {
    if (midSwiper.current.swiper) {
      midSwiper.current.swiper.slideNext();
    }
    if (rightSwiper.current.swiper) {
      rightSwiper.current.swiper.slideNext()
    }
  }

  return (
    <section className={styles.projectBox}>
      {/* <section className={styles.swiperSet}> */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={1000}
        autoplay={{ delay: 3500 }}
        onSlideChange={handleSwiper}
        allowTouchMove={false}
        ref={leftSwiper}
        className={styles.left}
      >
        {places.map((place, i) => (
          <SwiperSlide key={i} className={styles.leftSlide}>
            <Image alt="" fill sizes="1" src={place.url} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        speed={1300}
        loop={true}
        ref={midSwiper}
        className={styles.mid}
        allowTouchMove={false}
      >
        {places.map((place, i) => (
          <SwiperSlide key={i} className={styles.midSlide}>
            <article>
              <h3>{place.tag}</h3>
              <p><MdLocationPin /> <h6>{place.location}</h6> </p>
              <p><h6 style={{ color: 'black' }}> {place.time}</h6> </p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        speed={1500}
        loop={true}
        ref={rightSwiper}
        className={styles.right}
        allowTouchMove={false}
      >
        {places.map((place, i) => (
          <SwiperSlide key={i} className={styles.leftSlide}>
            <Image alt="" fill sizes="1" src={place.url2} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </section> */}
    </section>
  );
}

export default ProjectBox;