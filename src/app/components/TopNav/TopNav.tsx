'use client'
import { MdMenu } from 'react-icons/md';
import styles from '../../home.module.css';
import { useState } from 'react';

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
        <a href="">Home </a>
        <a href="">About </a>
        <a href="">Services </a>
        <a href="">Projects </a>
        <a href="">Team </a>
        <a href="">Blog </a>
        <a href="">FAQ</a>
        <a href="">Contact </a>
      </nav>

      <legend>
        Company
      </legend>
    </section>
  )
}
export default TopNav;