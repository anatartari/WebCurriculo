import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <h1 className={styles.titulo}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h1 className={styles.subtitulo}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h1 className={styles.texto}>texto</h1>
      </main>

      <footer></footer>
    </div>
  );
}
