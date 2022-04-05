import styled from "styled-components"

export const NavigationContainerWrapper  = styled.div`
width: 100%;
height: 120px;
position: relative;
background-color: white;

@media (max-width: 768px) {
  height: 80px;
}
`

export const NavigationUpperDetails = styled.div`
width: 100%;
color: #fff;

@media (max-width: 800px) {
    display: none;
}
`

export const NavigationContainer  = styled.div`
width: 100%;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 2px 0px;
0px 1px 1px rgba(96, 97, 112, 0.14);
backdrop-filter:${({scroll}) => scroll ? " blur(50px)" : " blur(50px)"};
color: #333;
position: ${({scroll}) => scroll ? "fixed" : "relative"};
top: 0;
z-index: 999998;
  
`

export const NavigationWrapper  = styled.div`
width: 100%;
padding: 1.2em 0;
color: #333;
background-color: transparent;

display: flex;
justify-content: space-between;
align-items: center;

.Logo{
cursor: pointer;
color: #45DBB7;
}

@media (max-width: 768px) {
    padding: 1.5em 0;
}

`

export const NavigationShadow  = styled.div`
z-index: 99;

@media (max-width: 800px) {
    position: absolute;
    background-color: transparent;
    transition: all .3s ease-in;
    width: 100%;
    height: 100vh;
    // backdrop-filter: blur(50px);
    left: ${({clicked}) => clicked ? "0" : "-100%"};
    top: 0;

}
`

export const NavigationItem  = styled.ul`
    display: flex;
    gap: 2em;
    align-items: center;


li{
    font-weight: 500;
    cursor: pointer;
    font-size: 1.1rem;
    font-family: helvetica;
    color: white !important;
    transition: all 0.5s ease-in-out;

    span{
    color: #0283F2;
    }
}

li:hover{
    color: #412272;
    transform: scale(1.09);
}

@media (max-width: 800px) {
    display: block;
    background-color: #F48C11;
    width: 60vw;
    height: 100vh;
    padding: 2em 1em;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

    li {
    padding: 1em;
    border-bottom: 1px solid rgba(229, 229, 229, 0.01);
    }

}
`

export const MobileIcon  = styled.div`
display: none;
z-index: 99999;
cursor: pointer;

@media (max-width: 800px) {
    display: block;
}
`

export default NavigationContainer  ;