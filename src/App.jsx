import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Boards } from './components/Boards';
import { AppContext } from './context/AppContext';
function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className=''>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='/:id' element={<Boards />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}
export default App;
