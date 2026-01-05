import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyAppRouter from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyAppRouter />
  </StrictMode>,
)
