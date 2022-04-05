import styled from "styled-components"

export const AttributeContainer  = styled.div`
width: auto;
background-color: rgb(17,34,64, .1);
position: relative;
padding: 2em 0;
`

export const AttributeDetails  = styled.div`
position: relative;
`

export const AttributeBox  = styled.div`
width: 100%;
padding: 1em 2em;
border-radius: 3px;
background-color: rgb(17,34,64, .1);
color: white;
line-height: 1.5;
box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
transition: all 0.8s ease 0s;


&:hover{
    transform: translateY(-15px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 10px -5px, rgba(0, 0, 0, 0.02) 0px 5px 4px -5px;
}
`




export default AttributeContainer