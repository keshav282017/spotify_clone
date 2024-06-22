// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Genres from './pages/Genres';
// import Albums from './pages/Albums';
// import Playlist from './pages/Playlist';
// import Search from './pages/Search';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/genres" element={<Genres />} />
//         <Route path="/albums" element={<Albums />} />
//         <Route path="/playlist/:id" element={<Playlist />} />
//         <Route path="/search" element={<Search />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Genres from './pages/Genres';
import Albums from './pages/Albums';
import Playlist from './pages/Playlist';
import Search from './pages/Search';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/playlist/:id" element={<Playlist />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
