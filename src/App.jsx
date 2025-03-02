import { useState } from 'react'
import './App.css'
import LandingPage from './pages/visitors/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router'
import Registration from './pages/auth/Registration'
import Login from './pages/auth/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Myorders from './pages/visitors/Myorders'
import Dashboard from './pages/admin/Dashboard'
import AddProduct from './pages/admin/AddProduct/AddProduct'
import ManageProduct from './pages/admin/ManageProduct/ManageProduct'
import ManageOrders from './pages/admin/ManageOrders/ManageOrders'

function App() {

  return (

        <BrowserRouter>
        <main>
           
            <Routes>
              <Route path="/" element={  <LandingPage/>} />
              <Route path="registration" element={  <Registration/>} />
              <Route path="login" element={  <Login/>} />
              <Route path="orders" element={  <Myorders/>} />
              <Route path="dashboard" element={  <Dashboard/>} />
              <Route path="dashboard/AddProduct" element={  <AddProduct/>} />
              <Route path="dashboard/ManageProduct" element={  <ManageProduct/>} />
              <Route path="dashboard/ManageOrders" element={  <ManageOrders/>} />
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App
