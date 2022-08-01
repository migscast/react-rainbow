
import './App.css';
import React, {useState} from "react"
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  const [colors, setColors] = useState(['red', 'orange','yellow', 'greenyellow','green','lightblue', 'blue', 'violet'])

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color = {color} key={color} />
    )
  })

    const addColor = (newColor) => {
        setColors([...colors, newColor])
    }

    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    )

 
  return (
    <div className="App">
      {colors.map((color, i) => 
      <ColorBlock color={color} key={color} />
      )}
      <ColorForm />
    </div>
  );
}

export default App;
