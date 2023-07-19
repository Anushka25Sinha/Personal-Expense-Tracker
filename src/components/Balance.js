import React from 'react'
import { Box, Typography ,styled} from '@mui/material'
import Transaction from './Transaction'


const BalanceText = styled(Typography)`
font-size: 25px;
margin-bottom: 20px;
`

export default function ({transactions}) {

    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount,item) => (amount += item), 0).toFixed(2);

    return (
        <Box>
            <BalanceText>Balance: ₹{total}</BalanceText>
        </Box>
    )
}
