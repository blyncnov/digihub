import React from 'react';
import Image from 'next/image';
import styled from "styled-components"

import Button from "../constants/Button"

import ErrorPicture from "../public/Images/assests/error.png"

import {
    Constraints, Section,
    SectionInner, Divider, Paragraph,
} from "../styles/constants/Constants"

const ErrorContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const ErrorCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`


const pageNotFound = () => {
    return (
        <ErrorContainer>
            <Constraints>
                <Section>
                    <SectionInner>
                        <Divider>
                            <ErrorCenter>
                                <Image src={ErrorPicture} alt="errorpage" height={300} width={300} />
                                <br/>
                                <Paragraph>Hey Buddy!!! Site under construction 😊 </Paragraph>
                                <br />
                                <Button bg="red" border="none" bgHover="green" colorHover="red" tittle="Go Back Home" urlData="/" />
                            </ErrorCenter>
                        </Divider>
                    </SectionInner>
                </Section>
            </Constraints>

        </ErrorContainer>
    )
}

export default pageNotFound