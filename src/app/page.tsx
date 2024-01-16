import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Daniel Riley-Dittmann</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>Portfolio under construction...</h1>
      </div>

      <div className={styles.grid}>
        <a
          href="mailto:danielriley.io@icloud.com"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Email <span>-&gt;</span>
          </h2>
          <p>Drop me a line and say hello 👋.</p>
        </a>

        <a
          href="https://www.linkedin.com/in/danielrileydittmann/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            LinkedIn <span>-&gt;</span>
          </h2>
          <p>A necessary evil, the only social media I have.</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Telegram <span>-&gt;</span>
          </h2>
          <p>Please open a secure chat, so it is encrypted.</p>
        </a>

        <a
          href="https://github.com/danielrileyde"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            GitHub <span>-&gt;</span>
          </h2>
          <p>Find me on GitHub.</p>
        </a>
      </div>
    </main>
  );
}
