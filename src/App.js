import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useAuth } from './contexts/auth-context';

import Header from './components/Header'
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Footer from './components/Footer';

function App() {
  const isLoggedIn = useAuth();
  return (
    <div className="rb-homepage-desktop">
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
