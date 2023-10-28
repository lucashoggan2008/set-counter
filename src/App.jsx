import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <main>
      <header className="bg-black"><h1 className="text-white font-bold text-3xl text-center p-2">Set Counter</h1></header>
      <h1 className="output-text font-bold text-center text-3xl">{count}</h1>
      <div className="button-container grid grid-cols-2 grid-rows-1 w-screen">
        <button className="m-auto buttons" onClick={() => {setCount(count+1)}}>
          <p className="text-2xl bg-blue-700 text-center font-semibold rounded-sm" >Plus</p>
        </button>
        <button className="m-auto buttons"  onClick={() => {if (count > 0) {setCount(count-1)}}}>
          <p className="text-2xl bg-blue-700 text-center font-semibold rounded-sm block">Minus</p>
        </button>
      </div>

    </main>
  )
}

export default App
 