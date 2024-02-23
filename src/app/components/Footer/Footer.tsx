import { MdCall, MdLocationPin, MdMail, MdOutlineSmartphone, MdSend } from 'react-icons/md';
import styles from './footer.module.css';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footerBox}>
      <section className={styles.low}>
        <div className={styles.left}>
          <h3>Contact</h3>
          <ul>
            <Link href={'/call'}>
              <span>Telephone</span>
              <p><MdCall /> <span className='int'>+233(0)302-224-517</span></p>
            </Link>
            <Link href={'/call'}>
              <span>Cell</span>
              <p><MdOutlineSmartphone /> <span className='int'>+233(0)302-224-517</span></p>
            </Link>
            <article>
              <span>Email</span>
              <Link href={'/call'}>
                <p><MdMail /> <span className='int'>dwloffice@davidwalterghana.com</span></p>
              </Link>
              <Link href={''}>
                <p><MdMail /> <span className='int'>md@davidwalterghana.com</span></p>
              </Link>
              <Link href={''}>
                <p><MdMail /> <span className='int'>gm@davidwalterghana.com</span></p>
              </Link>
            </article>
          </ul>
        </div>
        <div className={styles.mid}>
          <h3>Location</h3>
          <article>
            <p><MdLocationPin /> <span className='int'>Office Address</span></p>
            <Link href={'/call'}>
              <p><span className='int'>AVA House</span></p>
              <p><span className='int'>C66/ 2 Kojo Thompson Road,</span></p>
              <p><span className='int'>Adabraka, Accra</span></p>
            </Link>
          </article>

          <article>
            <p><MdLocationPin /> <span className='int'>Postal Address</span></p>
            <Link href={'/call'}>
              <p><span className='int'>P. O. Box OS 01663</span></p>
              <p><span className='int'>Osu - Accra</span></p>
              <p><span className='int'>Ghana</span></p>
            </Link>
          </article>

          <article>
            <p><MdLocationPin /> <span className='int'>GPS Address</span></p>
            <Link href={'/call'}>
              <p><span className='int'>GA-074-1988</span></p>
            </Link>
          </article>
        </div>
        <div className={styles.right}>
          <h3>Mail Us</h3>
          <form>
            <input type="text" placeholder='Email' />
            <textarea placeholder='Notes'></textarea>
            <button><MdSend /></button>
          </form>
        </div>
      </section>
      <hr />
      <section className={styles.socialBox}>
        <FaFacebookF />
        <FaInstagram />
        <FaLinkedin />
      </section>
    </footer>
  );
}

export default Footer;