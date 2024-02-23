import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc';
import styles from './titleBox.module.css';
import { MdLocationPin, MdMail, MdPhone } from 'react-icons/md';
import Link from 'next/link';
import TopNav from '../TopNav/TopNav';

const TitleBox = () => {
  const point = <VscDebugBreakpointDataUnverified />;

  return (
    <section className={styles.headBox}>
      <section className={styles.topNav}>
        <section className={styles.left}>
          <Link href={'/'} className={styles.logoBox}>
            <h1>D</h1>
            <h1>W</h1>
          </Link>
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
    </section>
  );
}

export default TitleBox;