




import { createContext, useState, useContext } from "react";


export const GameContext = createContext();

export const useGame = () => {


    const context = useContext(GameContext)
    if (!context) {
        throw new Error("GAMEcontext must be used within an GAMEcontext");
    }
    return context;
}

export const GameProvider = ({ children }) => {

    const [configuracionJuego, setConfiguracionJuego] = useState({
        duration: 30,
        level: 'normal',
        times: { dios: 1, veterano: 2, normal: 3 }
    });



    const [estadoJuego, setEstadoJuego] = useState({
        palabrasCorrectas: 0,
        totalPalabras: 0,
        tiempo: 0,

    });

    const [maximoPuntaje, setMaximoPuntaje] = useState([]);





    return (
        <GameContext.Provider value={{ configuracionJuego, estadoJuego, maximoPuntaje,setEstadoJuego }}>
            {children}
        </GameContext.Provider>
    );
}
