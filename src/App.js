import React, { lazy, Suspense, useState } from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Errors from './components/Errors';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import UserContext from './utilis/UserContext';
import { useEffect } from 'react';

const Grocery = lazy (()=> import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName]= useState();

  useEffect(()=>{

    const data = {
      name: "Neha",
    };
    setUserName(data.name);
  }, []);

  return(
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <div className="app">
        <Header />
        <Outlet/>
    </div>
    </UserContext.Provider>
  )
}

const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Errors/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
        <Suspense fallback={<Shimmer/>}>
          <Grocery />
          </Suspense>
          ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ]
  },
  

  

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router= {appRouter} />);