import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./containers/Layout/Layout";
import { MainPage } from './pages/main-page/MainPage';
// import { ReviewsPage } from "./pages/reviews-page/ReviewsPage"
import { OrderingPage } from './pages/ordering-page/OrderingPage';
import { SushiSetsPage } from "./pages/sushi-sets-page/SushiSetsPage";
import { ProductDescriptionPage } from './pages/product-description-page/ProductDescriptionPage';

function App() {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<Navigate replace to="/mainPage" />} />
            <Route path="/mainPage/*" element={<MainPage />}/>
            <Route path="/sushiSets" element={<SushiSetsPage/>}/>
            <Route path="/sushiSets/:linkTo" element={<ProductDescriptionPage/>}/>
        </Route>
        <Route path="/shippingAndPayment" element={<OrderingPage/>}/>
    </Routes>
  );
}

export default App;
