import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Container from './component/Container.jsx'
import Navbar from './component/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Container>
        <App />
    </Container>
  </StrictMode>,
)
