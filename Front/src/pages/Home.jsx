import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white m-5 rounded-lg p-20">
        <img src="jacke.png" alt="Logo" className="mb-8 w-32 h-32" />
        <div className="grid grid-cols-2 gap-5">
          <div className="block w-48 py-2 text-center text-white bg-blue-500 rounded shadow-md hover:bg-blue-600">
            <Link to="/jugar">
              Empezar Juego
            </Link>
          </div>
          <div className="block w-48 py-2 text-center text-white bg-green-500 rounded shadow-md hover:bg-green-600">
            <Link to="/configuracion">
              Configuración
            </Link>
          </div>
          <div className="block w-48 py-2 text-center text-white bg-red-500 rounded shadow-md hover:bg-red-600">
            <Link to="/puntajes">
              Puntajes
            </Link>
          </div>
          <div className="block w-48 py-2 text-center text-white bg-yellow-500 rounded shadow-md hover:bg-yellow-600">
            <Link to="/ayuda">
              Ayuda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
