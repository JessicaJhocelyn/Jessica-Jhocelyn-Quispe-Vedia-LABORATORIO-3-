import React from 'react';
import Swal from 'sweetalert2';

export const KeyComponent = ({letter, handlerKey, status}) => {
    return (
    <div
    className= {status ? "disablediv": ("")} 
     onClick={() => {
        handlerKey(letter);
    }}
    >
    {letter}
    </div>
    );
};


