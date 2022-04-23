import React from 'react';
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from 'react-router-dom';
import { HomePage } from './pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;