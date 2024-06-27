import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useGame } from "../context/GameContext";

const Juego = () => {
    const colors = ['Yellow', 'Orange', 'Black', 'Red', 'Green', 'Purple', 'Blue', 'Gray'];
    const colorNames = ['Blue', 'Orange', 'Black', 'Red', 'Green', 'Purple', 'Yellow', 'Gray'];

    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [currentTextColorIndex, setCurrentTextColorIndex] = useState(0);
    const [currentColorName, setCurrentColorName] = useState('');
    const [userResponse, setUserResponse] = useState(''); 

    const { estadoJuego, setEstadoJuego } = useGame();
    const { palabrasCorrectas } = estadoJuego;

    const { register, handleSubmit } = useForm();

    const selectRandomColors = () => {
        let newColorIndex = Math.floor(Math.random() * 5);
        let newTextColorIndex = Math.floor(Math.random() * 6);


        while (newTextColorIndex === newColorIndex) {
            newTextColorIndex = Math.floor(Math.random() * colors.length);
        }

        setCurrentColorIndex(newColorIndex);
        setCurrentTextColorIndex(newTextColorIndex);
        setCurrentColorName(colorNames[newColorIndex]);
    };

    const checkResponse = (response) => {
        if(response==="si"){
            console.log("si")
        }
        
        const isCorrect = (response === 'si' && colors[currentColorIndex] === currentColorName);

        setUserResponse(isCorrect ? 'si' : 'no');

        console.log(isCorrect)

        if (isCorrect) {
            setEstadoJuego(prevState => ({
                ...prevState,
                palabrasCorrectas: prevState.palabrasCorrectas + 1,
            }));
        }

        selectRandomColors();
    };

    const startGame = () => {
        selectRandomColors();
     
    };

    useEffect(() => {
        startGame();
       
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white m-5 rounded-lg">
                <div className="bg-blue-900 grid grid-cols-3 gap-5 p-5 pb-10 rounded-xl text-white">
                    <div className="text-center">
                        <h2 className='text-2xl'>1</h2>
                        <p>Cantidad de Palabras</p>
                    </div>
                    <div className="text-center">
                        <h1 className='text-6xl'>{palabrasCorrectas}</h1>
                        <p>Correctas</p>
                    </div>
                    <div className="text-center">
                        <h2 className='text-2xl'>1</h2>
                        <p>Tiempo Flatante</p>
                    </div>
                </div>

                <div className="flex items-center justify-center -mt-5">
                    <img src="jacke.png" alt="Logo" className="mb-8 w-32 h-32" />
                </div>

                <hr />

                <div className="grid grid-cols-3 gap-5">
                    <div className="text-center">
                        <p>Bonus</p>
                        <p>0</p>
                    </div>
                    <div className="text-center">
                        <p className='text-2xl'>0</p>
                    </div>
                    <div className="text-center">
                        <button className='bg-red-600 text-white px-3 pt-1 rounded-full'>||</button>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-xl text-center' style={{ color: colors[currentTextColorIndex] }}>{currentColorName}</p>
                </div>

                <form onSubmit={handleSubmit(checkResponse)}>
                    <div className="grid grid-cols-3 mt-10">
                        <button type="submit" className={`bg-green-500 text-white px-4 py-2 rounded mr-4`}>
                            Yes
                        </button>
                        <img src="jacke.png" alt="Logo" className="mb-8 w-10 h-10 ml-20" />
                        <button type="button" onClick={() => checkResponse('no')} className={`bg-red-500 text-white px-4 py-2 rounded`}>
                            No
                        </button>
                    </div>
                </form>

                <div className="text-center mt-5">
                    {userResponse === 'si' && (
                        <p className={`text-${colors[currentTextColorIndex].toLowerCase()}-400 text-3xl font-bold`}>
                            {currentColorName} {colors[currentColorIndex]}
                        </p>
                    )}
                    {userResponse === 'si' && <p className="text-green-500">Correct</p>}
                    {userResponse === 'no' && <p className="text-red-500">Incorrect</p>}
                </div>
            </div>
        </div>
    );
};

export default Juego;
