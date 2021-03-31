import Grid from "@material-ui/core/Grid";
import Image from "next/image";

export default function ListaIcon(props) {
  const { topicos } = props;
  return (
    <div>
      {props !== undefined &&
        topicos.map(function (t) {
          return (
            <Grid
              key={t.conteudo}
              container
              direction="row"
              spacing={2}
              style={{ marginLeft: 5 }}
            >
              <Grid item>
                <Image src={t.icon} alt="Icone" width={25} height={25} />
              </Grid>
              <Grid item>
                {t.link !== undefined ? (
                  <a href={t.link}>{t.conteudo}</a>
                ) : (
                  <span>{t.conteudo}</span>
                )}
              </Grid>
            </Grid>
          );
        })}
    </div>
  );
}
