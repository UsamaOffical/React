
import { useState } from "react"


function App() {
  const [foodItmes,setFoodItems] = useState([])
  const handleDelete = (item) => {
    const newFood = foodItmes.filter((food) => food !== item)
    setFoodItems(newFood)
  }
  return (
   <>
   <div className="w-[50%] bg-gray-300 mx-auto border-2 border-gray-300 p-4">
      <h1 className="text-2xl text-gray-700 text-center font-bold p-4">
        Healthy Foods
      </h1>
      <input 
        type="text" 
        placeholder="Enter Here" 
        className="p-2 w-[100%] outline-0 bg-gray-50 mx-auto "
        onKeyDown={(e)=>{
          if(e.key === "Enter"){
            let newFood = [...foodItmes, e.target.value]
            e.target.value = ''
            setFoodItems(newFood)
          }
        }}
        />
        {foodItmes.map((item)=> <div key={item} className="text-left my-2 bg-gray-200 p-1 flex items-center justify-between">{item}
        <button onClick={()=>handleDelete(item)}>Delete</button>
        </div>)}
        
   </div>
   </>
  )
}

export default App
