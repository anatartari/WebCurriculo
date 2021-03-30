import styles from "../../styles/titulo.module.css";

export default function Subtitulo(props) {
  return <span className={styles.subtitulo}>{props.conteudo}</span>;
}
