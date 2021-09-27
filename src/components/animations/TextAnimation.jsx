import React from 'react'
import { Wrapper } from './TextAnimationElements'

const TextAnimation = ({text}) => {

    //word splitter to animate letters
    const lastArray = text.split("")   

    return (
        <Wrapper>  
            {lastArray.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        </Wrapper>
    )
}


export default TextAnimation
