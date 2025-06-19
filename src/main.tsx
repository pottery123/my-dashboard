import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router";
import './index.css'
import App from './App.tsx'
import EmployeeDetail from './EmployeeDetail.tsx'
import EmployeeOnboarding from './EmployeeOnboarding.tsx';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/employee/:id" element={<EmployeeDetail />} />
    <Route path="/employeeonboarding" element={<EmployeeOnboarding />} />
    </Routes>
  </HashRouter>,
)
