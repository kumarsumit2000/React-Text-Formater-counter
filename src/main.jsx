import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Textbox from './components/Textbox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Textbox Inputboxhead = "Format Your Text Here"/>
  </StrictMode>,
)


