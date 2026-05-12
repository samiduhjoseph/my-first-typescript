import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import Themeprovider from './context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <Themeprovider>
      <App />
    </Themeprovider>
  </StrictMode>,
)
