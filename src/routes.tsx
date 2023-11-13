import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import App from './pages/App/App';


export default function AppRouter() {
  return (
    <main>
      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/play' element={<App/>}/>
        </Routes>
      </Router>
    </main>
  );
}