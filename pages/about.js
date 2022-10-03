import Image from "next/image";
import styles from "../styles/about.module.css"

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure accusamus
        eum quisquam dicta nihil? Hic laudantium blanditiis perferendis autem
        ducimus iusto, pariatur alias maxime ea culpa rem quia vitae minima.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      ></Image>
    </div>
  );
}
