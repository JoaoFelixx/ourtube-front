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
  ChannelByIdPage,
} from './pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login/" element={<LoginPage />} />
        <Route path="/video/:id/" element={<ShowVideoPage />}/>
        <Route path="/channel/:id/" element={<ChannelByIdPage />} />
        <Route path="/mychannel/:id?" element={<MyChannelPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;