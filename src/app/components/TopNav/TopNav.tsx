'use client'
import { MdMenu } from 'react-icons/md';
import styles from '../../home.module.css';
import { useState } from 'react';
import Link from 'next/link';

const TopNav = () => {
  const [menuToggled, setMenuToggled] = useState(false);
  console.log('at least')

  const toggleMenu = () => {
    menuToggled ? setMenuToggled(false) : setMenuToggled(true);
    console.log(menuToggled)
  }


  return (
    <section onClick={toggleMenu} className={menuToggled ? `${styles.headNav} ${styles.change}` : styles.headNav}>
      <MdMenu onClick={toggleMenu} className={styles.headToggle} />
      <nav>
        <Link href={"/"}>Home </Link>
        <Link href="">About </Link>
        <Link href="">Gallery </Link>
        <Link href="">Team </Link>
        <Link href="">Blog </Link>
        <Link href="">FAQ</Link>
        <Link href="">Contact </Link>
      </nav>

      <Link href={'/timeline'}>
        <legend>
          Timeline
        </legend>
      </Link>
    </section>
  )
}
export default TopNav;