import Image from 'next/image';
import styles from '../home.module.css';
import { clients } from '@/External/lists';

const ClientSet = () => {
  const setCount = [0, 0];

  return (
    <section className={styles.clientSet}>
      {setCount.map((_, i) => (
        <section className={styles.clients} key={i}>
          {clients.map((el, ii) => (
            el.img &&

            <Image alt='' src={el.img} height={60} width={120} key={ii} />
            // <div key={i} className={styles.client}>
            //   {point}
            //   <span>{el.tag}</span>
            //   {point}
            // </div>
          ))}
        </section>
      ))}
    </section>
  );
}

export default ClientSet;