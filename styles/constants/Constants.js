import styled from "styled-components"

export const Constraints  = styled.div`
width: 100%;
max-width: ${({max}) => max ? max : "90%"};
margin: 0 auto;
`


export const Section  = styled.div`
width: 100%;
padding: ${({ padding }) => padding ? padding : "2.5em 0"}

`

export const SectionInner = styled.div`
width: 100%;
display: grid;
gap: 2em;
grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
align-items: ${({align}) => align ? align : "center"};
justify-content: space-between;

@media (max-width: 768px) {
  grid-template-columns: repeat(1, 1fr);
 grid-template-rows: repeat(1, 1fr);
}
`

export const Divider  = styled.div`
width: 100%;
order: ${({ order }) => (order ? order : "0")};
// background-color: ${({ order }) => (order ?  "red" : "green")};

@media (max-width: 768px) {
  order: ${({ orderM }) => (orderM ? orderM : "0")};
}
`

export const FlexBoxToRow  = styled.div`
display: flex;
gap: 1em;
align-items: center;

.hr{
  width: 50%;
  height: 1px;
  border: 1px solid #F9B590;
}
`

export const HeadingOne  = styled.h1`
font-size: ${({size}) => size ? size : "2rem"};
color: ${({ color }) => color ? color : "#412272"};

@media (max-width: 768px) {
  font-size: ${({sizeM}) => sizeM ? sizeM : "1.5rem"};
}
`

export const Paragraph = styled.p`
font-size: ${({size}) => size ? size : "14px"};
line-height: 25px;
color: ${({ color }) => color ? color : "black"};

@media (max-width: 768px) {
  font-size: ${({ size }) => size ? size : "14px"};
}

span{
  color: #0283F2;
}
`


export const Button1 = styled.button`
   background-color:  ${({bg}) => bg ? bg : "transparent"};
    color: ${({color}) => color ? color : "white"};
    border: 1px solid #F48C11;
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: Capitalise;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s ease-in-out, color 0.15s ease-in-out,
      background-color 0.5s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;

      &:hover {
           box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.03),
      0px 2px 4px rgba(96, 97, 112, 0.14);
    color: ${({colorHover}) => colorHover ? colorHover : "#EF4B20"};
    background-color: ${({bgHover}) => bgHover ? bgHover : "transparent"};
    border: ${({border}) => border ? border : "1px solid #EF4B20"};
      }

      @media (max-width: 768px){
        width: ${({full}) => full ? full : "auto"};
      
      }
`

export default Constraints;
