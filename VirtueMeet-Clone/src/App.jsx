import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home';
import CallRoom from './pages/CallRoom';
const App = () => {

 const router = createBrowserRouter([ 
  {
    path: "/",
    index: true,
    element: < Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/call-room",
    index: true,
    element: <CallRoom />,
    errorElement: <div>404 Not Found</div>,
  },

 ])

  return (
    <>
    
    <RouterProvider router={router} />
    
    
    </>
  )
}

export default App;