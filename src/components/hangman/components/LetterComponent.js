import React from 'react';
import Swal from 'sweetalert2';

export const LetterComponent = ({letter, status}) => {
    return <div>{status ? letter: "?"}</div>;
};
