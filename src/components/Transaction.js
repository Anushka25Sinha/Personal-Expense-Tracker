import { ListItem, ListItemIcon, ListItemText, styled } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Transactions from './Transactions';

const Detail = styled(ListItem)`
margin-top: 10px;

`

export default function ({ transaction, setTransactions, transactions }) {

    const color = transaction.amount > 0 ? 'Green' : 'Red';
    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id))
    }

    return (
        <Detail style={{ background: `${color}`, color: '#fff' }}>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
            </ListItemIcon>
            <ListItemText>{transaction.text}</ListItemText>
            <ListItemText>{transaction.amount} </ListItemText>
        </Detail>
    )
}
