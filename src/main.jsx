import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import About from './About.jsx'
import './index.css'
import App from './App.jsx'
import OurClients from './OurClients.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <About />
    <OurClients />
    <Contact />
  </StrictMode>,
)
