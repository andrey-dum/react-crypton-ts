import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import useStyles from './theme';

import CryptoTable from './components/CryptoTable'
import ConverterBlock from './components/ConverterBlock';



function App() {
  const classes: any = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={8}>
          <CryptoTable classes={classes}/>
        </Grid>

        <Grid item xs={4}>
          <Grid item>
            <ConverterBlock classes={classes} />
          </Grid>
        </Grid>

      </Grid>
    </Container>
  );
}

export default App;
