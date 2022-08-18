import {
  HomePage,
  LoginPage,
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
        <Route path='/register' element={<LoginPage />}></Route>
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