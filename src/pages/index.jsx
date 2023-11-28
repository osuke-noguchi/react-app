import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useEffect } from 'react';

const handleClick = (e) => {
    e.preventDefault();
  };

export default function Home() {

  useEffect(() => {
    console.log("マウント時の処理");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマウント時の処理");
      document.body.style.backgroundColor = "";
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a
        href="/about"
        onClick={handleClick}
      >ボタン</a>
      <Main page="index"></Main>
      <Footer />
    </div>
  );
}
