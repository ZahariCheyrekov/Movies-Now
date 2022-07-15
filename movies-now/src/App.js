import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies';
import CreateMovie from './components/CreateMovie';
import Footer from './components/Footer';
import CardDetails from './components/CardDetails';
import Login from './components/Login/Login';
import Register from './components/Register';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      <UserContext.Provider value={user}>
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/create' element={<CreateMovie />} />
              <Route path='/movies/details/:movieCardId' element={<CardDetails />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </main>

        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;