import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>
  },
  {
    path: "reservation",
    element: <Layout><Reservation /></Layout>
  },
  {
    path: "booking",
    element: <Layout><Booking /></Layout>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={router}/>);
