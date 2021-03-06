import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

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
import NotFound404 from './components/NotFound404/NotFound404';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/create' element={<CreateMovie />} />
            </Route>
            <Route path='/movies/details/:movieCardId' element={<CardDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound404 />} />
          </Routes>
        </main>

        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;