import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { observer, inject } from 'mobx-react';
import ConverterStore from '../stores/converterStore';
import CurrenciesStore from '../stores/currenciesStore';

import { TCoin } from '../types';
type IConverterBlock = {
    classes: any;
    currenciesStore?: CurrenciesStore;
    converterStore?: ConverterStore;
  }
// interface IConverterBlock  {
//     classes: any;
//   }


const ConverterBlock: React.FC<IConverterBlock>  = inject(
  'currenciesStore',
  'converterStore',
)(
  observer(({ classes, currenciesStore, converterStore }) => {

    const coins2: TCoin[] = currenciesStore!.getItems
    const coins: string[] = currenciesStore!.getItems.map(coin => coin.name);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      // converterStore.setSelectedCoin(coin);
    };
    

    return (
            <Paper className={classes.paper}>
              <div className={classes.currencyBoxHeader}>
                <span style={{color: 'gray'}}>1 Доллар США равно</span>
                <h2> 27,93 Украинская гривна</h2>
              </div>
              <div className={classes.cryptoInputBox}>
                <FormControl className={classes.formControlTotal}>
                  <TextField fullWidth label="Сумма" variant="outlined" />
                </FormControl>
                
                <FormControl className={classes.formControlName}>
                  <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
                  <Select 
                    value={converterStore?.getSelectedCoin.name || ''}
                    variant="outlined"
                 
                  >
                    {coins2.map(coin => (
                      // <MenuItem value={name}>{name}</MenuItem>
                      <MenuItem value={coin.name} onClick={() => {converterStore?.setSelectedCoin(coin)}}>{coin.name}</MenuItem>
                    ))}
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
                    variant="outlined"
                    //onChange={e => setSelectedOutCoin(e.target.value as string)}
                    // value={selectedOutCoin}
                    value={''}
                    >
                    <MenuItem value="USD">USD</MenuItem>
                    {coins.map(name => (
                      <MenuItem value={name}>{name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

            </Paper>
    )
}))


export default ConverterBlock;