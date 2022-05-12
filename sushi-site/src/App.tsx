import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./containers/Layout/Layout";
import { MainPage } from './pages/main-page/MainPage';
import { OrderingPage } from './pages/ordering-page/OrderingPage';
import { SushiSetsPage } from "./pages/sushi-sets-page/SushiSetsPage";
import {ProductDescription} from "./containers/ProductDescription/ProductDescription";

function App() {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path='/' element={<Navigate replace to="/mainPage" />} />
            <Route path='/mainPage/*' element={<MainPage/>}/>
            <Route path='/sushiSets' element={<SushiSetsPage/>}/>
        </Route>
        <Route path='/shippingAndPayment' element={<OrderingPage/>}/>
    </Routes>
  );
}

export default App;
