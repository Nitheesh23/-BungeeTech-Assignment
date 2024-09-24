import React, { useState } from 'react';
import Logo from "../assets/MovieLogo.png";
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ setSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearch(value); 
  };

  return (
    <div className='flex space-x-8 items-center pl-3 py-4 bg-gray-100'>
      <Link to="/">
        <img className="w-[50px]" src={Logo} alt="Logo" />
      </Link>

      <Link to="/" className='text-blue-500 text-2xl md:text-3xl font-bold'>
        Movies
      </Link>
      
      <Link to="/watchlist" className='text-blue-500 text-2xl md:text-3xl font-bold'>
        WatchList
      </Link>
    </div>
  );
}

export default Navbar;
