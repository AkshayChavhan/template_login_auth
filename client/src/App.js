import React from 'react'
import { createBrowserRouter,RouterProvider} from "react-router-dom";

// import all copmponents
import Username from "./components/auth_page/Username";
import Password from "./components/auth_page/Password";
import Register from "./components/auth_page/Register";
import Profile from "./components/auth_page/Profile";
import Recovery from "./components/auth_page/Recovery";
import Reset from "./components/auth_page/Reset";
import PageNotFound from "./components/auth_page/PageNotFound";



// root routes

const router = createBrowserRouter([
  {
    path : "/",
    element : < Username />
  },
  {
    path : "/register",
    element : <Register />
  },
  {
    path : "/password",
    element : <Password />
  },
  {
    path : "/profile",
    element : <Profile />
  },
  {
    path : "/recovery",
    element : <Recovery />
  },
  {
    path : "/reset",
    element : <Reset />
  },
  {
    path : "*",
    element : <PageNotFound />
  }
])
export default function App() {
  return (
    <main>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </main>
  )
}
