import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Transactions from "./components/Transactions";
import Addresses from "./components/Addresses";
import Wallet from "./components/Wallet";
import Dashboard from "./Dashboard";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Transfer from "./components/transfer/Transfer";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
        children: [
            {
                path: "/transactions",
                element: <Transactions/>,
            },
            {
                path: "/addresses",
                element: <Addresses/>,
            },
            {
                path: "/wallet",
                element: <Wallet/>
            },
            {
                path: "/transfer/:address",
                element: <Transfer/>,
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
