import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./containers/Layout/Layout";
import { MainPage } from './pages/main-page/MainPage';
import { ReviewsPage } from './pages/reviews-page/ReviewsPage';

function App() {
  return (
    <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Navigate replace to="/main" />} />
            <Route path='/main/*' element={<MainPage/>}/>
            <Route path='/reviews' element={<ReviewsPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
