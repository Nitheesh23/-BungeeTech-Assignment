import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import WatchList from './Components/WatchList';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [search, setSearch] = useState(''); // Manage search state here

  return (
    <>
      <Navbar setSearch={setSearch} /> {/* Pass setSearch as prop */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchList search={search} />} /> {/* Pass search as prop */}
      </Routes>
    </>
  );
}

export default App;
