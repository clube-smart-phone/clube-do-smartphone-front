import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import AppRoutes from './routes.jsx'
import Header from './components/Header'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Header/>
    <AppRoutes />
  </React.StrictMode>,
)
