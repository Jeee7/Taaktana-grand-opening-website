import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashScreen from './Components/splashScreen';
import HomeScreen from './Components/Home';

function App() {
  
  const [showSplash, setShowSplash] = useState(true);

  const handleOpenInvitation = () => {
    setShowSplash(false);
  }

  return (
    <div className="App">
      <Routes>
        {showSplash ? (
          <Route 
            path='/'
            element={<SplashScreen onOpenInvitation={handleOpenInvitation} /> }
          /> 
        ) : (
          <Route path='/' element={<HomeScreen />} />
        )}
      </Routes>
    </div>
  );
} 

export default App;
