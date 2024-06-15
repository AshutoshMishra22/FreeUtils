import styles from './page.module.scss';
import Header from '@/component/Header';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.card}>
        <Header />
      </section>
    </main>
  );
}
