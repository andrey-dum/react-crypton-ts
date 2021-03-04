import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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
        justifyContent: 'space-between',
        
    },
    selectInput: {
        marginLeft: 15,
    },
    formControlTotal: {
        margin: theme.spacing(1),
    },
    formControlName: {
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
        backgroundColor: '#ffdada',
    },
    greenColumn: {
        backgroundColor: '#d8ffc4',
    },
    rowCurrency: {
        cursor: 'pointer',
    },

    }),
);


export default useStyles