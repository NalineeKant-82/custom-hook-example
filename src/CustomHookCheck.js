import React from "react";
import useCallHook from "./useCallHook";

const CustomHookCheck = () => {
  const [value] = useCallHook();
  return (
    <div>
      <h2 onClick={() => console.log(value)}>CustomHookCheck</h2>
      {value?.data?.map((item) => (
        <h3 key={item.id}>{item?.title}</h3>
      ))}
    </div>
  );
};

export default CustomHookCheck;
