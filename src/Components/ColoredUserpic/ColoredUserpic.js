import React, { useState } from 'react'
import "./ColoredUserpic.sass"

const ColoredUserpic = ({src, size, margin, backgroundColor, colors, hoverColors, colorWidth}) => {
    const [color, setColor] = useState(`linear-gradient(270deg, ${hoverColors[0]}, ${hoverColors[1]} 70%`),
          colorOne = `linear-gradient(270deg, ${colors[0]} 20%, ${colors[1]}`,
          colorTwo = `linear-gradient(270deg, ${hoverColors[0]}, ${hoverColors[1]} 70%`;
    return (
        <div style={{ height:size, width:size, padding: colorWidth, background: color}} 
                onMouseEnter={() => setColor(colorOne)}
                onMouseLeave={() => setColor(colorTwo)} 
                className="icon">
            <div style={{backgroundColor: backgroundColor}} 
                
                className="icon__outline">
                <img style={{margin: margin}} className="icon__img" src={src} alt={src} />
            </div>
        </div>
            
        
    )
}

export default ColoredUserpic
