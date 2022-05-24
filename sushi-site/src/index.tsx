import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { themes } from './constants/themes';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={themes}>
    <GlobalStyle />
      <BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>
  </ThemeProvider>
);
