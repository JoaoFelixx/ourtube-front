import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from 'react-router-dom';
import { 
  HomePage, 
  LoginPage, 
  ShowVideoPage,
  MyChannelPage, 
} from './pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video/:id" element={<ShowVideoPage />}/>
        <Route path="/myChannel" element={<MyChannelPage />} />
        <Route path="/channel/:id" element={<h1>por id</h1>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;