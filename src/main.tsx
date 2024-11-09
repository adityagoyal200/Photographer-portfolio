import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Lenis from 'lenis'

const lenis = new Lenis({
  autoRaf: true,
  duration:2
});

lenis.on('scroll', (e) => {
  console.log(e);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
