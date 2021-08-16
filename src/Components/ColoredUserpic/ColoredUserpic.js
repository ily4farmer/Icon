import React, { useState } from 'react'
import "./ColoredUserpic.sass"

const ColoredUserpic = ({src, size, margin, backgroundColor, colors, hoverColors, colorWidth}) => {
    const [color, setColor] = useState(`linear-gradient(270deg, ${colors[0]} 30%, ${colors[1]}`),
          colorOne = `linear-gradient(270deg, ${colors[0]} 30%, ${colors[1]}`,
          colorTwo = `linear-gradient(270deg, ${hoverColors[0]} 30%, ${hoverColors[1]}`;
    return (
        <div style={{backgroundColor: backgroundColor, height:size, width:size}} className="icon">
            <div style={{padding: colorWidth, background: color}} 
                onMouseEnter={() => setColor(colorOne)}
                onMouseLeave={() => setColor(colorTwo)} 
                className="icon__outline">
                <img style={{margin: margin}} className="icon__img" src={src} alt={src} />
            </div>
        </div>
            
        
    )
}

export default ColoredUserpic
