import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import AccountSettings from './pages/AccountSettings';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    
    const currentUser = localStorage.getItem('popx-user');
    if (currentUser) {
      setIsLoggedIn(true);
    } 
  }, []);


  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/account" /> : <Welcome />} />
      <Route path="/login" element={isLoggedIn ? <Navigate to="/account" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/register" element={isLoggedIn ? <Navigate to="/account" /> : <Register setIsLoggedIn={setIsLoggedIn} />} />
      <Route 
        path="/account" 
        element={isLoggedIn ? <AccountSettings setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />} 
      />
    </Routes>
  );
}

export default App;