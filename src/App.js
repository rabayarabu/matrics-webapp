import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CurrencyList from './components/CurrencyList';
import Navbar from './components/Navbar';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CurrencyList />} />
          <Route path="details/:name" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
