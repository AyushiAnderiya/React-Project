import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [backgroundImage, setBackgroundImage] = useState('');
  let b = "https://images.pexels.com/photos/1358833/pexels-photo-1358833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let w = "https://images.pexels.com/photos/4466492/pexels-photo-4466492.jpeg";
  let l = "https://images.pexels.com/photos/3516431/pexels-photo-3516431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let g = "https://media.istockphoto.com/id/1370290678/photo/wooden-podium-display-with-leaf-shadow-composition-for-product-presentation.jpg?s=2048x2048&w=is&k=20&c=JcKfrbj1Q8-wbINO5iUIK2VqnF7L5MYTG5xamevWxAw=";
  let y = "https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let r = "https://images.pexels.com/photos/7207930/pexels-photo-7207930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const handleClick = (coloururl) => {
    setBackgroundImage(coloururl);
  };
  return (

    <>
      <div id='main' className='w-500 h-600 ' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className='mb-40 text-white' >About Life</h1>
        <div className="container">
          <p className='text-white text-6xl'>If You can read this</p>
          <p className='text-white text-6xl'>Smile  </p>
          <p className='text-white text-6xl'>You can see this beautiful world</p>
        </div>
        <div id='btn' className='bottom-2 inset-x-0 mt-20 p-21'>
          <button className='bg-black text-white rounded-full  px-3 mx-2' onClick={() => handleClick(b)}>Black</button> 
          <button className='bg-white text-black rounded-full  px-3 mx-2' onClick={() => handleClick(w)}>White</button> 
          <button className='bg-blue-500 text-white rounded-full px-3 mx-2' onClick={() => handleClick(l)}>Blue</button> 
          <button className='bg-green-500 text-white rounded-full  px-3 mx-2' onClick={() => handleClick(g)}>Green</button>
          <button className='bg-yellow-300 text-white rounded-full px-3 mx-2' onClick={() => handleClick(y)}>Yellow</button> 
          <button className='bg-red-500 text-white rounded-full px-3 mx-2' onClick={() => handleClick(r)}>Red</button> 
        </div>
      </div>
    </>
  )
}


export default App
