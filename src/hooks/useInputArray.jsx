import { useCallback, useState } from 'react';

export const useInputArray = () => {
  const [text, setText] = useState('');
  const [array, setArray] = useState([]);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert('同じ値がすでに存在します');
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  const onChange = useCallback((e) => {
    setText(e.target.value.trim());
  }, []);

  return { text, array, handleAdd, onChange };
};
