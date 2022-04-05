import React from 'react'
import styled from "styled-components"

import {
    Paragraph
} from "../styles/constants/Constants"

const FloatBox = styled.div`
margin-right: 5%;
background-color: transparent;  
// padding: 1em 0;
letter-spacing: 0.1em;
border-radius: 2px;
-webkit-writing-mode: vertical-rl;

color: #F9B590;
`

const FloatAbsolute = styled.div`
position: fixed;
bottom: 0;
right: ${({ right }) => right ? right : "1em"};
left: ${({ left }) => left ? left : "none"};

@media (max-width: 768px) {
    display: none;
}

`

const InnerFloatBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
writing-mode: vertical-rl;
gap: 1em;


div{
    width: 2px;
    height: 100px;
    background-color: #F9B590;
}

`

const FloatComponents = ({ value, left, right }) => {
    return (
        <>
            <FloatAbsolute left={left} right={right}>
                <FloatBox>
                    <InnerFloatBox>
                        <Paragraph color="#F9B590">
                            <a style={{ color: "inherit" }} href="https://github.com/blyncnov">  {value} </a>
                        </Paragraph>
                        <div></div>
                    </InnerFloatBox>
                </FloatBox>
            </FloatAbsolute>
        </>
    )
}

export default FloatComponents
