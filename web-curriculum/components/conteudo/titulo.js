import styles from "../../styles/titulo.module.css";

export default function Titulo(props) {
  return <span className={styles.titulo}>{props.conteudo}</span>;
}
