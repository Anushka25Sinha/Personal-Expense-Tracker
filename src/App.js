import React, { useState, useEffect } from 'react'
import Navbar from './components/navbar/navbar'
import "./App.css"
import { Typography, styled, Box } from '@mui/material'
import Balance from './components/Balance'
import ExpenseCard from './components/ExpenseCard'
import NewTransaction from './components/NewTransaction'
import Transaction from './components/Transactions'
import Transactions from './components/Transactions'
import Login from './Login_page/Login'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";



const Header = styled(Typography)`
font-size: 36px;
color: blue;
text-transform: uppercase;
`
const Component = styled(Box)`
display: flex;
background: #fff;
width: 800px;
padding: 10px;
border-radius: 20px;
margin: auto; 
& > div{
    height: 70vh;
    width: 50%;
    padding: 10px;
}
`

export default function () {

    const [transactions, setTransactions]=useState([])

    return (
        <Router>
        <Box className='App'>
            <Navbar />
            
            <Header>Expense Tracker</Header>
            <Component>
                <Box>
                    <Balance transactions={transactions} />
                    <ExpenseCard transactions={transactions}/>
                    <NewTransaction setTransactions={setTransactions}/>
                </Box>
                <Box>
                    <Transactions transactions={transactions} setTransactions={setTransactions}/>
                </Box>
            </Component>
        </Box>
        </Router>
    )
}
