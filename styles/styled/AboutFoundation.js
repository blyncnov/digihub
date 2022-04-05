import styled from "styled-components"

export const AboutFoundationContainer  = styled.div`
width: auto;
background-color: #FFFFFF;
`

export const OurGoalShowCase  = styled.div`
display: grid;
gap: 2em;
grid-template-columns: 1fr 1fr;
align-items: center;
justify-content: space-between;

.SkillFlexItem{
    display: flex;
    align-items: center;
   gap: 1em;
}

li{
  font-size: 12px;
  color: #0A192F;
}

`

export default AboutFoundationContainer