import Head from "next/head";

import Grid from "@material-ui/core/Grid";
import Sidebar from "../components/sidebar";
import ImagemMenina from "../components/imagem/index";
import Conteudo from "../components/conteudo/index";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.up("sm")]: {
  //     display: "none",
  //   },
  // },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    backgroundColor: "#3F48AB",
    height: "100%",
  },
  conteudo: {
    padding: theme.spacing(3),
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -150,
  },
}));

export default function Home(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Sidebar />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div>
      <Head>
        <title>Ana Paula - Curriculo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={false}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          {/* <div className={classes.toolbar} /> */}
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            style={{ backgroundColor: "#272E72", maxHeight: "500px" }}
          >
            <ImagemMenina />
          </Grid>
          <div className={classes.conteudo}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ width: "80%" }}
            >
              <Conteudo />
            </Grid>
          </div>
        </main>
      </div>

      {/* <main>
        {/* <ImagemMenina /> 
        <Grid container direction="row" justify="space-between">
          <Grid item md={2}>
            <Sidebar />
          </Grid>
          <Grid item md={10} style={{ backgroundColor: "blue" }}>
            <span>2 colana</span>
          </Grid>
        </Grid>
      </main> */}
    </div>
  );
}
