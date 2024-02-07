import { MdArrowForward,MdLocationPin, MdMail,MdOutlineMoreTime, MdOutlineSupportAgent, MdPhone } from 'react-icons/md';
import styles from './home.module.css';
import Link from 'next/link';
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc';
import { IoConstructOutline } from 'react-icons/io5';
import IntroSwiper from './home/IntroSwiper';
import serviceImage from '../../public/contractor.webp';
import Image from 'next/image';
import { RiVerifiedBadgeLine } from 'react-icons/ri';
import { clients, services } from '@/External/lists';
import aboutImage from '../../public/about.jpg';
import TopNav from './components/TopNav/TopNav';
// import TopNav from '@/components/TopNav/topNav';
// import projectImage

const Home = () => {
  const point = <VscDebugBreakpointDataUnverified />;

  return (
    <main>
      <section className={styles.headBox}>
        <section className={styles.topNav}>
          <section className={styles.left}>
            <div className={styles.logoBox}>
              <h1>D</h1>
              <h1>W</h1>
            </div>
            <article className={styles.titleBox}>
              <p>
                <strong>DAVID WALTER </strong>
                <span>LIMITED</span>
              </p>
              <small>Since 1975</small>
              <div>
                <sub>{point} General Building</sub>
                <sub>{point} Civil</sub>
                <sub>{point} Rail</sub>
                <sub>{point} Electrical</sub>
                <sub>{point} Mechanical</sub>
                <sub>{point} Contractors</sub>
                <sub>{point} Engineers</sub>
              </div>
            </article>
          </section>

          <section className={styles.right}>
            <Link href={''}>
              <MdPhone />
              <p>
                <span>+233 00 000 0000</span>
                <small>Make A Call</small>
              </p>
            </Link>
            <Link href={''}>
              <MdMail />
              <p>
                <span>mail.com</span>
                <small>Send An Email</small>
              </p>
            </Link>
            <Link href={''}>
              <MdLocationPin />
              <p>
                <span>Accra</span>
                <small>Location</small>
              </p>
            </Link>
          </section>
        </section>

        <TopNav/>

        <section className={styles.headCon}>
          <article>
            <small>
              <sub></sub>
              Quality Assured
            </small>
            <h1>
              WELCOME TO DAVID WALTER
            </h1>
            <p>
              With a team of master craftsmen and cutting-edge technology, we transform your vision into tangible
              reality.
            </p>
            <nav>
              <Link href="">Our Services <MdArrowForward /></Link>
              <Link href="">Contact Us <MdArrowForward /></Link>
            </nav>
          </article>
          <section className={styles.right}>
            <IntroSwiper />
          </section>
        </section>
      </section>
      <section className={styles.levelBox}>
        <article className={styles.left}>
          <p>
            <strong>49 Years</strong>
            <sub>Of Undefeated Success</sub>
          </p>
        </article>
        <article className={styles.right}>
          <p>
            <MdOutlineMoreTime />
            <span>Efficiency</span>
          </p>
          <p>
            <IoConstructOutline />
            <span>Communication</span>
          </p>
          <p>
            <MdOutlineSupportAgent />
            <span>Reliability</span>
          </p>
        </article>
      </section>

      <section className={styles.aboutBox}>
        <div className={styles.left}>
          <Image alt='alt' fill sizes='1' src={aboutImage} />
        </div>
        <div className={styles.right}>
          <p>
            David Walter Limited is one of the leading and progressive Civil Engineering companies in Accra, Ghana. It is a Limited Liability Company with Registration number CS426892014 and authorized to commence business on the 12th November 1975.
            David Walter Limited provides General Building and Civil Engineering Works, Building Engineering Services and Construction services. The company has grown steadily as a direct result of vigorous commitment to its client satisfaction.  Our team is known for its resourcefulness and dedication which allows us to excel in providing good and reliable services at all times.
          </p>
        </div>
      </section>

      <section className={styles.serviceBox} id='box'>
        <header>
          <small><sub></sub> Our Services</small>
          <h3>Our Services</h3>
        </header>

        <section className={styles.services}>
          {services.map((el,i) => (
            <div key={i} className={styles.service}>

              {el.iconEl}
              <p>
                <strong>{el.tag}</strong>
                <small>Designing, renovating and building of commercial structures.</small>
              </p>
            </div>
          ))}
        </section>
      </section>


      <section className={styles.clientBox} id='box'>
        <header>
          <small><sub></sub> Our Clients</small>
          <h3>Our Clients</h3>
        </header>

        <section className={styles.clients}>
          {clients.map((el,i) => (
            // el.img &&
            <div key={i} className={styles.client}>
              {point}
              <span>{el.tag}</span>
              {point}
            </div>
          ))}
        </section>
      </section>


      <section className={styles.projectBox} id='box'>
        <section className={styles.top}>
          <header>
            <small><sub></sub> Recent Projects</small>
            <h3>Recent Projects</h3>
          </header>

          <Link href={'/projects'}><MdArrowForward/> More</Link>
        </section>


        {/* <section>
          {[0, 0, 0, 0].map((el) => (
            <div className={styles.project}>

            </div>
          ))}
        </section> */}
      </section>



      {/* <span>Recent Projects</span>
          <span>Blog</span>
          <span>Testimonial</span>
          <span>Timeline preview link to actual page</span>
          <span>Map</span>
          <span>contact</span>
          <span>foot</span> */}


    </main>
  );
}

export default Home;