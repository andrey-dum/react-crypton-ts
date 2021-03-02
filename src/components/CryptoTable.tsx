import React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import axios from 'axios';


type ICryptoTable = {
    classes: any;

  };

export type TCoin = {
    name: string;
    fullName: string;
    imageUrl: string;
    price: number;
    volume24Hour: number;
  };
// export interface TCoin {
//     name: string;
//     fullName: string;
//     imageUrl: string;
//     price: number;
//     volume24Hour: number;
//   };



const CryptoTable = ({classes}: ICryptoTable) => {
    const [items, setItems] = React.useState<TCoin[]>([])
    React.useEffect(() => {
       
        axios
            .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then(({ data }) => {

              const coins: TCoin[] = data.Data.map((coin: any) => {
                const obj: TCoin = {
                  name: coin.CoinInfo.Name,
                  fullName: coin.CoinInfo.FullName,
                  imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                  price: coin.RAW.USD.PRICE.toFixed(3),
                  volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
                };
                return obj;
              });
              setItems(coins);

             });

  }, []);

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">FullName</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">volume24hour</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!items.length
              ? 'Загрузка...'
              : items.map((coin: TCoin) => (
                  <TableRow
                    className={classes.rowCurrency}
                    hover
                    key={coin.name}>
                    <TableCell>
                    <img className={classes.currencyIcon} src={coin.imageUrl} alt="Coin icon" />
                    </TableCell>
                    <TableCell align="left">{coin.name}</TableCell>
                    <TableCell align="left">{coin.fullName}</TableCell>
                    <TableCell
                     
                      align="left">
                      ${coin.price}
                    </TableCell>
                    <TableCell align="left">${coin.volume24Hour}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}


export default CryptoTable