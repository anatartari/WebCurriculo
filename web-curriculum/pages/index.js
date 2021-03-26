import Head from "next/head";

import Grid from "@material-ui/core/Grid";
import Sidebar from "../components/sidebar";
// import ImagemMenina from "../components/imagem/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <ImagemMenina /> */}
        <Grid container direction="row" justify="space-between">
          <Grid item md={2}>
            <Sidebar />
          </Grid>
          <Grid item md={10} style={{ backgroundColor: "blue" }}>
            <span>2 colana</span>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
