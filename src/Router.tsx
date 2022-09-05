import {
  HomePage,
  LoginPage,
  Subscribes,
  ShowVideoPage,
  MyChannelPage,
  ChannelByIdPage,
  GetByDescription,
} from './pages';
import { Route, Routes, Navigate, BrowserRouter, } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<LoginPage />} />
        <Route path="/subscribes" element={<Subscribes />} />
        <Route path="/myChannel" element={<MyChannelPage />} />
        <Route path="/video/:id" element={<ShowVideoPage />} />
        <Route path="/channel/:id" element={<ChannelByIdPage />} />
        <Route path='/search/:description' element={<GetByDescription />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router as Routes };