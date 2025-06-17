import { useState } from "react";

function App() {

  const [display, setDisplay] = useState("");
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const handleButtonClick = (buttons) => {
    setDisplay(buttons)
    if (buttons === "C") {
      setDisplay("");
    }
    else if (buttons === "=") {
      const result = eval(display);
      setDisplay(result);
  }else{
      setDisplay(display + buttons);
    }
  }

  return (
    <div className="mt-4 w-[300px] bg-white/80 mx-auto p-5 rounded-lg shadow-4xl">
      <input type="text" value={display} placeholder='0' className="w-full shadow-lg border-1 border-gray-300 p-3 text-2xl outline-none" readOnly />
      <div className="w-full flex flex-wrap justify-center mt-4">
      {buttons.map((btn) => <button className="w-[70px] h-[70px] rounded-full shadow-lg bg-black/8 m-1.5 trasition duration-300 hover:bg-gray-300 cursor-pointer" onClick={()=>handleButtonClick(btn)}>{btn}</button>)}

      </div>
    </div>
  );
}

export default App;
