import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import Header from './components/Header';
import NavMenu from './NavMenu';
import MainContent from './MainContent';
import Footer from './components/Footer';
import logo from '/images/image.png'
import React from 'react';
import './App.css'

function MainContentWrapper()
{
  const {subject} = useParams();
  return <MainContent subject={subject} />;
}

function App() {
  
  return (
    <>
    <Router>
      <div>
        <NavMenu />
        <Routes>
          <Route path="/scp/:subject" element={<MainContentWrapper />} />
        </Routes>
      </div>
    </Router>

      <img src={logo} className="logo" alt="Logo"/>
      
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
