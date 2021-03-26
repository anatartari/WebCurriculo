import style from "./styles.module.css";
import Grid from "@material-ui/core/Grid";

export default function Sidebar() {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
        style={{ paddingTop: 20 }}
      >
        <Grid item>
          <img
            className={style.foto}
            src="https://avatars.githubusercontent.com/u/51000339?v=4"
            alt="Imagem de perfil"
          />
        </Grid>
        <Grid item>
          <span className="nome">Ana Paula Tartari Seidenstucker</span>
        </Grid>
      </Grid>
    </div>
  );
}
