
import React from "react"

import styled, {keyframes} from "styled-components";

export const HeaderAnimation = () => {
    const reactArray = "Berke.".split("")
    return (
    
        <Wrapper>
            {reactArray.map((item,index) => {
                return <span className="text-red-500" key={index}>{item}</span>
            })}
        </Wrapper>

    )
    
} 


const animation = keyframes`
    0% {opacity: 0; transform: translateY(-100%) skewY(10deg) skewX(10deg) rotateZ(30deg); filter:blur(10px);}
    25% {opacity:1; tranform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
    75% {opacity:1; tranform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
    100% {opacity:0; tranform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}

`

const Wrapper = styled.span`
    display: inline-block;
    span {
        display: inline-block;
        opacity: 0;
        animation-name: ${animation};
        animation-duration:5s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing: cubic;
    }
    span:nth-child(1) {
        animation-delay: 0.1s;
    }
    span:nth-child(2) {
        animation-delay: 0.2s;
    }
    span:nth-child(3) {
        animation-delay: 0.3s;
    }
    span:nth-child(4) {
        animation-delay: 0.4s;
    }
    span:nth-child(5) {
        animation-delay: 0.5s;
    }
    span:nth-child(5) {
        animation-delay: 0.6s;
    }

`
