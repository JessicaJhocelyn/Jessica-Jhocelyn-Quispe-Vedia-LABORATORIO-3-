import { useState } from "react";


export const useKeyBoard = () => {
  const generateKeyBoard = () => {
      let KeyList = [];
      for (let i = 0; i < 26; i++) {
          let key = String.fromCharCode( i + 65);
          KeyList = [...KeyList, {key, status: false, id: "key_" + i}];
          
      }
      
      return KeyList;
  };

  const [keyBoard, setKeyBoard] = useState(generateKeyBoard());
  return [keyBoard, setKeyBoard]; 
};
