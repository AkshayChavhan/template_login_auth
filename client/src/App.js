import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import all copmponents
import Username from "./components/auth_page/Username";
import Password from "./components/auth_page/Password";
import Register from "./components/auth_page/Register";
import Profile from "./components/auth_page/Profile";
import Recovery from "./components/auth_page/Recovery";
import Reset from "./components/auth_page/Reset";
import PageNotFound from "./components/auth_page/PageNotFound";


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth';



/** root routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Username></Username>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/password',
    element: <ProtectRoute><Password /></ProtectRoute>
  },
  {
    path: '/profile',
    element: <AuthorizeUser><Profile /></AuthorizeUser>
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '/reset',
    element: <Reset></Reset>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  },
])


export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
