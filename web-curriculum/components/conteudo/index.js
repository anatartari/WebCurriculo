import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Titulo from "./titulo";
import Subtitulo from "./subtitulo";
import TopicosExp from "./topicosExp";
import Tecnologias from "./tecnologias";

export default function Conteudo() {
  return (
    <Grid
      item
      style={{
        backgroundColor: "white",
        padding: 40,
        borderRadius: 10,
        width: 900,
      }}
    >
      <Grid item>
        <Titulo conteudo="Experiencias" />
        <TopicosExp />
        {/* <Subtitulo conteudo="Tecnologias" /> */}
        <Tecnologias style={{ marginTop: 50 }} />
      </Grid>
      <Grid item style={{ marginTop: 50 }}>
        <Titulo conteudo="Educação" />
        <TopicosExp />
      </Grid>
    </Grid>
  );
}
