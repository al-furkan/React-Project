// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home/Home';
// import RootLayout from './Layout/RootLayout'; // Uncomment if using RootLayout
// import Header from './components/Header/header'; // Uncomment if using Header
// import Footer from './components/Footer/Footer'; // Uncomment if using Footer
// import './App.css'; // Uncomment if you have global styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
