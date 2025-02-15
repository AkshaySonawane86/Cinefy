import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const [isOpen,setIsOpen]=useState(false);

//   const menuToggle=document.getElementById("menu-toggle");

//     const navLinks=document.getElementById("nav-links");

//     menuToggle.addEventListener("click",()=>{
//         navLinks.classList.toggle("active");
//  });

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    if (search.trim()) {
      // Navigate to a search results page or append the query to the current URL
      navigate(`/?search=${search}`);
    } else {
      alert('Please enter a search term!');
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Movie Time</h1>
      </div>
      <button class="menu-toggle" id="menu-toggle" onClick={()=>setIsOpen(!isOpen)}>☰</button>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/">Popular Movies</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
      <form onSubmit={handleSearch} className={`search-form ${isOpen ? "active" : ""}`}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Movies"
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;