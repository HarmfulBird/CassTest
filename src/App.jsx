import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import logo from '/images/image.png'
import './App.css'

function App() {
  
  return (
    <>
      <img src={logo} className="logo" alt="Logo"/>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
