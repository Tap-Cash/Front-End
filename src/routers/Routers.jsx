import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Sidebar from '../components/bar/Sidebar'
import Dashboard from '../pages/Dashboard'
import Transaction from '../pages/Transaction'
import SubAcc from '../pages/SubAcc'
import CustomerSer from '../pages/CustomerSer'


const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route element={<Sidebar />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/transaction' element={<Transaction />} />
            <Route path='/subaccount' element={<SubAcc />} />
            <Route path='/customerSer' element={<CustomerSer />} />
            
        </Routes>
    )
}

export default Routers
