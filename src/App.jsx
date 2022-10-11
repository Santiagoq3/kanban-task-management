import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Board } from './components/Board';

function App() {
  return (
    <BrowserRouter>
      <div className='w-full relative'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/:id' element={<Board />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
