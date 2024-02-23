'use client'
import Image from "next/image";
import TopNav from "../components/TopNav/TopNav";
import styles from './timeline.module.css';
import TitleBox from "../components/TitleBox/TitleBox";
import { MdArrowForward, MdSouth } from "react-icons/md";
import { MouseEvent, useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

const Timeline = () => {
  const sample = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706000421/RGV/IMG_0098_1_ku4o9s.jpg';
  const [trackerPos, setTrackerPos] = useState('0%');
  const [statusPos, setStatusPos] = useState('0%')
  const [year, setYear] = useState('2021');

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const calculatedScrollPercentage = (scrollTop / scrollHeight) * 100;
      setTrackerPos(`${calculatedScrollPercentage}%`);
      setStatusPos(`${Math.round(calculatedScrollPercentage)}%`)
      if (calculatedScrollPercentage > 50) {
        setYear('2022');
      } else {
        setYear('2021');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const vTour = 'https://dobiison.com/InfinitiView/RoyalGolfViewsApt/';

  return (
    <main id="boxPage">
      <TitleBox />
      <section className={styles.con}>
        <header>
          <strong>The David Walter Timeline</strong>
        </header>

        <section className={styles.timeBox}>
          <section className={styles.left}>
            {Array(9).fill('a').map((event, i) => (
              <Link href={vTour} className={styles.event} key={i} data-aos="fade-up">
                <sub>
                  <MdArrowForward />
                </sub>
                <div className={styles.imgBox}>
                  <Image alt="" fill sizes="auto" src={sample} />
                </div>
                <article>
                  <strong>Royal Golf Views</strong>
                  <span>Kumasi</span>
                  <legend>2021</legend>
                </article>
              </Link>
            ))}
          </section>
          <div className={styles.timer}>
            <div className={styles.tracker} style={trackerPos > '90%' ? { height: `calc(${trackerPos} - 30px)` } : { height: trackerPos }}>
              <legend>
                <MdSouth />
              </legend>
            </div>
          </div>
          <section className={styles.right}>
            {Array(9).fill('a').map((event, i) => (
              <Link href={vTour} className={styles.event} key={i} data-aos="fade-up">
                <sub>
                  <MdArrowForward />
                </sub>
                <div className={styles.imgBox}>
                  <Image alt="" fill sizes="auto" src={sample} />
                </div>
                <article>
                  <strong>Royal Golf Views</strong>
                  <span>Kumasi</span>
                  <legend>2021</legend>
                </article>
              </Link>
            ))}
          </section>
          <div className={styles.statusBox}>
            <strong className="int">{statusPos}</strong>
            <small className="int">{year}</small>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Timeline;