import { Box, Typography, Divider, List } from '@mui/material'
import React from 'react'
import Transaction from './Transaction'

export default function ({ transactions , setTransactions}) {
    return (
        <Box>
            <Typography variant='h5'>Previous Transaction</Typography>
            <Divider />
            <List>{
                transactions.map(transaction => (
                    <Transaction transaction={transaction} setTransactions={setTransactions} transactions={transactions}/>
                ))
            }
            </List>

        </Box>
    )
}
