import React, { useState } from 'react';


//pages
import Home from './pages/Home';
import Juego from "./pages/Juego";
import Configuracion from './pages/Configuracion';
import Puntaje from './pages/Puntaje';

import { Route, Routes, BrowserRouter } from "react-router-dom";

//context functions

import { GameProvider } from "./context/GameContext";

const App = () => {







  return (
    <GameProvider>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/jugar' element={<Juego />} />
          <Route path='/configuracion' element={<Configuracion />} />
          <Route path='/puntaje' element={<Puntaje />} />








        </Routes>

      </BrowserRouter>

    </GameProvider>




  );
};

export default App;
