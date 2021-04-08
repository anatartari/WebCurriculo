import styles from "../../styles/sidebar.module.css";
import Grid from "@material-ui/core/Grid";
import ListaIcone from "./listIcones";
import LocalIcon from "../../public/placeholder.svg";
import FaculdadeIcon from "../../public/livro.svg";
import EmailIcon from "../../public/o-email.svg";
import LinkedinIcon from "../../public/linkedin.svg";
import GithubIcon from "../../public/github.svg";

export default function Sidebar() {
  const topicos = [
    {
      icon: LocalIcon,
      conteudo: "Salvador, Bahia, Brasil",
    },
    {
      icon: FaculdadeIcon,
      conteudo: "Eng da computação",
    },
    {
      icon: EmailIcon,
      conteudo: "anatartari412@gmail.com",
    },
    {
      icon: LinkedinIcon,
      conteudo: "Linkedin",
      link:
        "https://www.linkedin.com/in/ana-paula-tártari-seidenstucker-a74959201",
    },
    {
      icon: GithubIcon,
      conteudo: "Github",
      link: "https://github.com/anatartari",
    },
  ];

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
      style={{ paddingTop: 25, width: "100%" }}
    >
      <Grid item>
        <img
          className={styles.Foto}
          src="https://avatars.githubusercontent.com/u/51000339?v=4"
          alt="Imagem de perfil"
        />
      </Grid>
      <Grid item className={styles.MeuNome}>
        <span>Ana Paula Tártari</span>
        <br />
        <span> Seidenstucker</span>
      </Grid>
      <Grid item>
        <p className={styles.Sobre}>
          Tenho interesse na área de desenvolvimento Back-end. Possuo
          familiaridade em desenvolvimento Front-end e estou aprimorando
          técnicas de segurança da informação. Tenho uma boa comunicação e busco
          estar em constate aprendizado
        </p>
      </Grid>
      <Grid item>
        <ListaIcone topicos={topicos} />
      </Grid>
    </Grid>
  );
}
