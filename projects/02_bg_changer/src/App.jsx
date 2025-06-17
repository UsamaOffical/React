import { useState } from 'react';
function App() {
  const [bgColor, setBgColor] = useState('blue');
  return (
    <div className="text-white w-full h-screen" style={{ backgroundColor: bgColor }}>
      
      <h1 className='lg:text-center text-left pl-5 lg:pl-0 pt-8 '>{bgColor.toUpperCase()}</h1>
      
      <div className='flex flex-col items-center justify-center px-4 py-8'>
        <div className='fixed flex flex-col justify-center top-0  mt-[5%] right-4 lg:right-12 bg-white px-5 py-2 rounded-4xl space-y-2'>
          <button style={{backgroundColor:'red'}} className='px-5 py-2 rounded-3xl mr-2' onClick={()=>setBgColor('red')}>Red</button>
          <button style={{backgroundColor:'purple'}} className='px-5 py-2 rounded-3xl mr-2' onClick={()=>setBgColor('purple')}>Purple</button>
          <button style={{backgroundColor:'olive'}} className='px-5 py-2 rounded-3xl mr-2' onClick={()=>setBgColor('olive')}>Olive</button>
          <button style={{backgroundColor:'black'}} className='px-5 py-2 rounded-3xl mr-2' onClick={()=>setBgColor('black')}>Black</button>
          <button style={{backgroundColor:'brown'}} className='px-5 py-2 rounded-3xl mr-2' onClick={()=>setBgColor('brown')}>Brown</button>
          <button style={{backgroundColor:'orange'}} className='px-5 py-2 rounded-3xl mr-2' onClick={()=>setBgColor('orange')}>Orange</button>
          <button style={{backgroundColor:'green'}} className='px-5 py-2 rounded-3xl mr-2' onClick={()=>setBgColor('green')}>Green</button>
          <button style={{backgroundColor:'pink'}} className='px-5 py-2 rounded-3xl mr-2' onClick={()=>setBgColor('pink')}>Pink</button>
          <button style={{backgroundColor:'yellow'}} className='px-5 py-2 rounded-3xl mr-2' onClick={()=>setBgColor('yellow')}>Yellow</button>
          <button style={{backgroundColor:'beige'}} className='px-5 py-2 rounded-3xl mr-2 text-black' onClick={()=>setBgColor('beige')}>Beige</button>
          <button style={{backgroundColor:'mintcream'}} className='px-5 py-2 rounded-3xl mr-2 text-black' onClick={()=>setBgColor('mintcream')}>Mintcream</button>
          <button style={{backgroundColor:'aliceblue'}} className='px-5 py-2 rounded-3xl mr-2 text-black' onClick={()=>setBgColor('aliceblue')}>Aliceblue</button>
        </div>
      </div>
    </div>
  )
}

export default App
