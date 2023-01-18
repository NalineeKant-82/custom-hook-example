import { useEffect, useRef, useState } from "react";
import axios from "axios";
const useCallHook = () => {
  const [value, setValue] = useState([]);
  const ref = useRef(true);
  useEffect(() => {
    if (ref.current) {
      getValue();
      ref.current = false;
    }
  }, []);
  const getValue = async () => {
    const newValue = await axios("https://jsonplaceholder.typicode.com/todos");
    setValue(newValue || []);
  };

  return [value];
};

export default useCallHook;
