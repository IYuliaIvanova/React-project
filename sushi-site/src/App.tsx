import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./containers/Layout/Layout";
import { MainPage } from './pages/main-page/MainPage';
import { ReviewPage } from './pages/reviews-page/ReviewsPage';

function App() {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path='/'  element={<ReviewPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
