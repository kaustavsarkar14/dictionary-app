import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';
import Word from './components/Word';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/word/:word" element={<Word/>} />
      </Routes>
    </div>
  );
}

export default App;
