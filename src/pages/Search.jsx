// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/search?q=${searchQuery}`);
//     }
//   };

//   return (
//     <nav className="bg-gray-900 text-white py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-lg font-bold">
//           <Link to="/">Spotify 2.0 Clone</Link>
//         </div>
//         <div className="flex space-x-4 items-center">
//           <Link to="/" className="hover:text-gray-300">
//             Home
//           </Link>
//           <Link to="/genres" className="hover:text-gray-300">
//             Genres
//           </Link>
//           <Link to="/albums" className="hover:text-gray-300">
//             Albums
//           </Link>
//         </div>
//         <form onSubmit={handleSearch} className="flex items-center">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search"
//             className="px-4 py-2 rounded-l bg-gray-700 text-white border-none focus:outline-none"
//           />
//           <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600">
//             Search
//           </button>
//         </form>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  // This is a mock search result, replace this with actual search logic
  const searchResults = [
    { id: 1, name: 'Song 1' },
    { id: 2, name: 'Song 2' },
    { id: 3, name: 'Artist 1' },
  ].filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default Search;

