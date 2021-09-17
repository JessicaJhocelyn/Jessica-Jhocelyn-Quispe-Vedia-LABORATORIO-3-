import React, { useState } from 'react';
import Swal from 'sweetalert2';

export const useCounter = (initCounter, {max, min}) => {
    const [counter, setCounter] = useState(initCounter);
    const incrementCounter = (step = 1) => {
        if (counter < max) {
            setCounter(counter + step);
        }
    };
    const decrementCounter = (step = 1) => {
        if (counter > min) {
            setCounter(counter - step);
        }
//////////////////////////////////////////////////////////////////////////////////////////////

/////// Detectar cuando el jugador pierde la partida y mostrar un mensaje de GAME OVER        
        else {
            Swal.fire('fin del juego: GAME OVER');}
    };

//////////////////////////////////////////////////////////////////////////////////////////////    
    
   const resetCounter = () => {
       setCounter(initCounter);
   };
   return [counter, incrementCounter, decrementCounter, resetCounter];
};
