// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 text-white py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-lg font-bold">
//           <Link to="/">Spotify</Link>
//         </div>
//         <div className="flex space-x-4">
//           <Link to="/" className="hover:text-gray-300">
//             Home
//           </Link>
//           <Link to="/genres" className="hover:text-gray-300">
//             Genres
//           </Link>
//           <Link to="/albums" className="hover:text-gray-300">
//             Albums
//           </Link>
//           <Link to="/search" className="hover:text-gray-300">
//             Search
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">Spotify</Link>
        </div>
        <div className="flex space-x-4 items-center m-2">
         
          <Link to="/genres" className="hover:text-gray-300">
            Genres
          </Link>
          <Link to="/albums" className="hover:text-gray-300">
            Albums
          </Link>
         
        </div>
        <form onSubmit={handleSearch} className="flex items-center ml-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="px-4 py-2 rounded-l bg-gray-700 text-white border-none focus:outline-none"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;





