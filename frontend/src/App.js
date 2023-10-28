import './App.css';
import NavbarComponent from './components/navbar/Navbar';
import LiveList from './components/list/LiveList';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <NavbarComponent></NavbarComponent>
      <div className="bg-bgblack">
        <Routes>
          <Route path="/" element={<LiveList></LiveList>} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;


