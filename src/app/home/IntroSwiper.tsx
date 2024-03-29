'use client'
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from 'swiper/modules';
import 'swiper/css/effect-cube';
import 'swiper/css';
import styles from '../home.module.css';
import image1 from '../../../public/build.png';
import image2 from '../../../public/crane.png';
import image3 from '../../../public/tools.png';
import Image from "next/image";

const IntroSwiper = () => {
  const headSwiper = useRef<{ swiper: any }>({ swiper: null });
  const images = [image1, image2, image3];

  return (
    <Swiper
      modules={[Autoplay, EffectCube]}
      effect="cube"
      loop={true}
      speed={1000}
      cubeEffect={{ shadow: false, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }}
      ref={headSwiper}
      autoplay={{ delay: 3500 }}
      className={styles.headSwiper}
    >
      {images.map((el,i) => (
        <SwiperSlide key={i} className={styles.headSlide}>
          <Image alt="" fill sizes="1" src={el} />
        </SwiperSlide>
      ))
      }
    </Swiper>
  );
}

export default IntroSwiper;