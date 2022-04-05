import styled from "styled-components"

export const HeroContainerSection  = styled.div`
width: auto;
padding: 2em 0;
background-color: black;
position: relative;
box-shadow: rgb(98 98 98 / 24%) 0px 3px 8px;


`

export const DonateontainerSection  = styled.div`
width: auto;
position: relative;
// background-color: white;
padding: 1em;
border-radius: 2px;
margin-top: 5%;
color: #0A192F;
box-shadow: 0 4px 30px -5px black ;


@media (max-width: 768px) {
  padding: 0;
}
`

export const DonateBox  = styled.div`
width: auto;
background-color: white;
border-radius: 2px;
position: absolute;
top: 0;
left: 0;
right: 0;
box-shadow: 0 2px 30px -5px #342828 ;

@media (max-width: 768px) {
    position: relative;
}
`

export const DetailedDonateBox  = styled.div`
background-color: #F48C11;
padding: 2em 1em;
border-radius: 4px 4px 0 0;
font-weight: bold;
color: white;
`

export const DetailedDonateForm  = styled.div`
padding:  1em;

label{
    margin: 1em 0;
}

input{
  outline: none;
  width: 100%;
  border-radius: 2px;
  padding:  1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
      background-color: #F48C11;
  border: none;
  color: white;
  padding: 1em 2em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 3px;
}



`

export default HeroContainerSection