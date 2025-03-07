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
import EditProduct from './pages/admin/EditProduct/EditProduct'
import Allproduct from './pages/visitors/Allproduct'
import ProdDetails from './pages/visitors/ProdDetails'

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
              <Route path="dashboard/EditProduct/:id" element={  <EditProduct/>} />
              <Route path="Allproduct" element={  <Allproduct/>} />
              <Route path="ProdDetails/:id" element={  <ProdDetails/>} />
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App
