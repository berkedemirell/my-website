
import React from "react"

import styled, {keyframes} from "styled-components";

export const TextAnimation = () => {
    return <Wrapper className="underline text-neutral-100">For more information... &darr;</Wrapper>
} 

const animation = keyframes`
    0% {opacity: 1; color:wheat}
    25% {opacity: 0.5; color:black}
    50% {opacity: 1; color:wheat}
    100% {opacity: 0.5; color:black}

`


const Wrapper = styled.span`
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 10s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;




`