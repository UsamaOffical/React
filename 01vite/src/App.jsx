import { useState } from "react"

function App() {
  let [value, setValue] = useState(0)

  const addValue = ()=>{
    if(value == 20){
      setValue(value)
    }else{

      setValue(value + 1)
    }
  }
  const minusValue = ()=>{
    if(value == 0){
      setValue(value)
      alert("Cart is empty!")
    }else{
      setValue(value - 1)
    }
  }
  
  return (
    <>
      <p>{value}</p>
      <button onClick={addValue}>Increase</button>
      <button onClick={minusValue}>Decrease</button>
    </>
  )
}

export default App
