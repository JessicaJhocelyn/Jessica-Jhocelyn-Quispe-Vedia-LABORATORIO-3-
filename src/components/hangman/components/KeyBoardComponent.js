import React from 'react'
import { useKeyBoard } from '../hooks/useKeyBoard'
import { KeyComponent } from './KeyComponent';
import Swal from 'sweetalert2';

export const KeyBoardComponent = ({handlerKeyPress }) => {
    const [keyBoard, setKeyBoard] = useKeyBoard();
    const handlerKey = (key) => {
        const newKeyBoard = keyBoard.map ((item) => {
            const {key: keylist} =item;
            if( key === keylist) {
                item.status = true;
            }
            return item;
        });
        setKeyBoard(newKeyBoard);
        handlerKeyPress(key);
      
    };
    
    return (
        <div className="flex-container">
            {keyBoard.map((item) =>(
                <KeyComponent 
                key = {item.id} 
                letter={item.key} 
                handlerKey={handlerKey} 
                status={item.status}
                />
            ))}
    </div>
  );
};
