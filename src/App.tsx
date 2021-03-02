import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


import CryptoTable from './components/CryptoTable'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    cryptoInputBox: {
      display: 'flex',
      alignItems: 'center',
      justifeContent: 'space-between',
      
    },
    selectInput: {
      marginLeft: 15,
    },
    formControlTotal: {
      margin: theme.spacing(1),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    currencyBoxHeader: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      padding: '0 8px',
      '& h2': {
        margin: '0 0 10px 0',
        fontWeight: '600',
        fontSize: 26,
      }
    },

    table: {
      minWidth: 650,
    },
    currencyIcon: {
      width: 20,
      height: 20,
      borderRadius: 30,
    },
    redColumn: {
      backgroundColor: '#d8ffc4',
    },
    greenColumn: {
      backgroundColor: '#ffdada',
    },
    rowCurrency: {
      cursor: 'pointer',
    },
  
  }),
);

function App() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');



  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={8}>
          {/* <Paper className={classes.paper}>
          </Paper> */}
          <CryptoTable classes={classes}/>
        </Grid>

        <Grid item xs={4}>
          <Grid item>
            <Paper className={classes.paper}>
              <div className={classes.currencyBoxHeader}>
                <span style={{color: 'gray'}}>1 Доллар США равно</span>
                <h2> 27,93 Украинская гривна</h2>
              </div>
              <div className={classes.cryptoInputBox}>
                <FormControl className={classes.formControlTotal}>
                  <TextField fullWidth label="Сумма" variant="outlined" />
                </FormControl>
                
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    variant="outlined"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>



              <div className={classes.cryptoInputBox}>
                <FormControl className={classes.formControlTotal}>
                  <TextField fullWidth label="Сумма" variant="outlined" />
                </FormControl>
                
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    variant="outlined"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>

            </Paper>
          </Grid>
        </Grid>

      </Grid>
    </Container>
  );
}

export default App;
