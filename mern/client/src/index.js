import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import ErrorPage from "./components/Error"
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from './components/Projects';

/*
Router for links intenral to teh websit. Default error page as well as loading home contnet as index
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomeContent /> },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/WorkWithMe",
        element: <Contact />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
