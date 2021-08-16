import React from 'react'
import ColoredUserpic from './Components/ColoredUserpic/ColoredUserpic'

const App = () => {
  return (
    <div className="container">
      <ColoredUserpic  
        src="./avatar.png"
        size={150}
        margin={4}
        backgroundColor='red'
        colors={['green', 'blue']}
        hoverColors={['blue', 'green']}
        colorWidth={6}/>
    </div>
  )
}

export default App
