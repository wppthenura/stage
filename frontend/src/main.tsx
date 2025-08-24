import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import "@fontsource/poppins"; // defaults to 400
import "@fontsource/poppins/600.css"; // semi-bold


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
