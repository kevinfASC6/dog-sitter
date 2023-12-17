// App.jsx
import React from 'react';
import Navbar from "./components/Navbar.jsx";  
import Home from "./components/Home.jsx";
import ViewListings from "./components/ViewListings.jsx";
import Login from "./components/Login.jsx";
import Register from './components/Register.jsx';
import CreatePost from './components/CreatePost.jsx';
import Dashboard from './components/Dashboard.jsx';

import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewlistings" element={<ViewListings/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/createpost" element={<CreatePost/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;

