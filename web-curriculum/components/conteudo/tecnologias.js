import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "../../styles/tecnologias.module.css";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SettingsIcon from "@material-ui/icons/Settings";
import BrushIcon from "@material-ui/icons/Brush";
import StorageIcon from "@material-ui/icons/Storage";
import NodeImg from "../../public/NodeJs.svg";
import CSharpImage from "../../public/c.svg";
import MysqlImagem from "../../public/MySQL.svg";
import PostgreeImagem from "../../public/postgree.svg";
import SqlServerImagem from "../../public/sql-server.svg";
import ReactImagem from "../../public/react.svg";
import NextImagem from "../../public/next.svg";
import HtmlCssImagem from "../../public/html_css.svg";

export default function SimpleGrow() {
  const [opcao, setOpcao] = React.useState(0);

  return (
    <div>
      <BottomNavigation
        value={opcao}
        onChange={(event, novaOpcao) => {
          setOpcao(novaOpcao);
          console.log(novaOpcao);
        }}
        showLabels
      >
        <BottomNavigationAction label="Backend" icon={<SettingsIcon />} />
        <BottomNavigationAction label="Banco de dados" icon={<StorageIcon />} />
        <BottomNavigationAction label="Frontend" icon={<BrushIcon />} />
      </BottomNavigation>

      <Grid
        container
        direction="row"
        spacing={2}
        justify="center"
        alignItems="center"
        style={{ paddingTop: 25 }}
      >
        {opcao === 0 ? (
          <>
            <Grid item>
              <Grow in={opcao === 0 ? true : false}>
                <Paper elevation={4} style={{ padding: 14 }}>
                  <img
                    className={styles.imagens}
                    src={NodeImg}
                    alt="Imagem node"
                  />
                </Paper>
              </Grow>
            </Grid>

            <Grid item>
              <Grow in={opcao === 0 ? true : false}>
                <Paper elevation={4} style={{ padding: 14 }}>
                  <img
                    className={styles.imagens}
                    src={CSharpImage}
                    alt="Imagem C#"
                  />
                </Paper>
              </Grow>
            </Grid>
          </>
        ) : opcao === 1 ? (
          <>
            <Grid item>
              <Grow in={opcao === 1 ? true : false}>
                <Paper elevation={4} style={{ padding: 14 }}>
                  <img
                    className={styles.imagens}
                    src={MysqlImagem}
                    alt="Imagem mysql"
                  />
                </Paper>
              </Grow>
            </Grid>

            <Grid item>
              <Grow in={opcao === 1 ? true : false}>
                <Paper elevation={4} style={{ padding: 14 }}>
                  <img
                    className={styles.imagens}
                    src={PostgreeImagem}
                    alt="Imagem Postgree"
                  />
                </Paper>
              </Grow>
            </Grid>

            <Grid item>
              <Grow in={opcao === 1 ? true : false}>
                <Paper elevation={4} style={{ padding: 14 }}>
                  <img
                    className={styles.imagens}
                    src={SqlServerImagem}
                    alt="Imagem Postgree"
                  />
                </Paper>
              </Grow>
            </Grid>
          </>
        ) : (
          opcao === 2 && (
            <>
              <Grid item>
                <Grow in={opcao === 2 ? true : false}>
                  <Paper elevation={4} style={{ padding: 14 }}>
                    <img
                      className={styles.imagens}
                      src={ReactImagem}
                      alt="Imagem react js"
                    />
                  </Paper>
                </Grow>
              </Grid>

              <Grid item>
                <Grow in={opcao === 2 ? true : false}>
                  <Paper elevation={4} style={{ padding: 14 }}>
                    <img
                      className={styles.imagens}
                      src={NextImagem}
                      alt="Imagem next js"
                    />
                  </Paper>
                </Grow>
              </Grid>
              <Grid item>
                <Grow in={opcao === 2 ? true : false}>
                  <Paper elevation={4} style={{ padding: 14 }}>
                    <img
                      className={styles.imagens}
                      src={HtmlCssImagem}
                      alt="Imagem html e css"
                    />
                  </Paper>
                </Grow>
              </Grid>
            </>
          )
        )}
      </Grid>
    </div>
  );
}
