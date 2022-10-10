import './App.css';
import {
  BrowserRouter,
  Routes,
  // Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='bg-mainRed md:bg-darkGreySecondary sm:bg-mainPurple'>
        <h1>zs</h1>
      </div>
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}
export default App;