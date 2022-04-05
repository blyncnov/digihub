import React from 'react';
import styled from "styled-components"

// styled-components
import { Button1 } from "../styles/constants/Constants";

export const Link = styled.a`
color: #ccd6f6;
width: 100%;
height: 100%;
// background-color: red;
cursor: pointer;

&:hover {
     color: ${({ colorHover }) => colorHover ? colorHover : "white"};
    background-color: ${({ bgHover }) => bgHover ? bgHover : "transparent"};
}
`


const Button = ({ tittle, bg, color, bgHover, colorHover, full, urlData, border, Donate }) => {
    console.log("here is the donat call" + Donate);
    return (
        <>
            <Button1 onClick={Donate} color={color} colorHover={colorHover} bgHover={bgHover} bg={bg} full={full}>
                <Link colorHover={colorHover} style={{ color: "white" }} target="_blank" href={urlData}>{tittle}</Link>
            </Button1>
        </>
    )
}

export default Button