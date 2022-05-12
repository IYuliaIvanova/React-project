import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./containers/Layout/Layout";
import { MainPage } from './pages/main-page/MainPage';
import { SushiSetsPage } from "./pages/sushi-sets-page/SushiSetsPage";
import {ProductDescription} from "./containers/ProductDescription/ProductDescription";

function App() {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path='/' element={<Navigate replace to="/MainPage" />} />
            <Route path='/MainPage/*' element={<MainPage/>}/>
            <Route path='/sushiSets' element={<SushiSetsPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
