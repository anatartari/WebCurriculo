import Grid from "@material-ui/core/Grid";
import Image from "next/image";

export default function ListaIcon(props) {
  return (
    <Grid container direction="row">
      <Grid item>
        <Image src={props.icone} alt="Icone" width={25} height={25} />
      </Grid>
      <Grid item>
        <span>Salvador, Bahia, Brasil</span>
      </Grid>
    </Grid>
  );
}
