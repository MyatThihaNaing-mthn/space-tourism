import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import MainContainer from './components/MainContainer.jsx'
import Destination from './components/Destination.jsx'
import Crews from './components/Crews.jsx'
import Technology from './components/Technology.jsx'

const router = createBrowserRouter(
  [
    {
      path : "/",
      element : (
        <MainContainer>
          <Home/>
        </MainContainer>
      ),
    },
    {
      path : "/destination",
      element : (
        <MainContainer>
          <Destination/>
        </MainContainer>
      ),
    },
    {
      path : "/crews",
      element : (
        <MainContainer>
          <Crews/>
        </MainContainer>
      )
    },
    {
      path : "/technology",
      element : (
        <MainContainer>
          <Technology/>
        </MainContainer>
      )
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
