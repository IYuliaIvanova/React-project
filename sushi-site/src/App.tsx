import React from 'react';
import { Button } from "./components/common-components/Button/Button"
import { Navigate, Route, Routes } from "react-router-dom";
import {CustomLink} from "./components/common-components/CustomLink/CustomLink";
import {HeaderContainer} from "./containers/HeaderContainer/HeaderContainer";
import {MainNavigation} from "./containers/MainNavigation/MainNavigation";
import {Layout} from "./containers/Layout/Layout";

function App() {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path='/' />
        </Route>

        {/*<Button>Хочу!</Button>*/}
        {/*<CustomLink>sdfsdf</CustomLink>*/}
    </Routes>
  );
}

export default App;
