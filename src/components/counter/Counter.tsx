import { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <div className="flex gap-4 items-center">
        <button onClick={() => setCount(count + 1)}  className=" cursor-pointer rounded-lg py-2 px-4 text-white bg-blue-700">
          <BsArrowUp />
        </button>
        <button onClick={() => setCount(count - 1)}  className=" cursor-pointer rounded-lg py-2 px-4 text-white bg-blue-700">
          <BsArrowDown />
        </button>
      </div>
    </>
  );
};

export default Counter;
