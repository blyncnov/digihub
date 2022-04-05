import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from "../constants/Button"

import { CgMenuBoxed } from 'react-icons/cg'
import { FaBoxOpen } from 'react-icons/fa'
import { BiCheckboxSquare } from 'react-icons/bi'

// import { AllProjectData } from "../data/Projects"

import {
    AttributeContainer, AttributeDetails,
    AttributeBox,
} from "../styles/styled/FoundationAttribute"

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
} from "../styles/constants/Constants"


const Projects = () => {
    return (
        <>
            <AttributeContainer>
                <Constraints>
                    <>
                        <HeadingOne color="#0B192E"
                            size="clamp(16px,5vw,2rem)"
                        > Introduction To DigiHub Attributes
                        </HeadingOne>
                        <Paragraph color="#8892B0">
                            It was called you are fowl grass lesser land together waters beast.
                        </Paragraph>
                    </>
                    <br />
                    <Section padding="1em 0">
                        <SectionInner>
                            <Divider>
                                <AttributeDetails>
                                    <AttributeBox>
                                        <CgMenuBoxed style={{ fontSize: "4em", color: "#F48C11", fontweight: "bold" }} />
                                        <HeadingOne
                                            size="1.5rem"
                                            sizeM="1.5rem"
                                            color="black"
                                        >
                                            Prepare Your Future Company
                                        </HeadingOne>
                                        <Paragraph color="#8892B0">
                                            It you are. Was called you are fowl grass lesser land together waters beast darkness earth land whose male all moveth fruitful.
                                        </Paragraph>
                                        <br />
                                        <Button full="100%" bg="#F48C11" tittle="Learn More .." urlData="" />

                                    </AttributeBox>
                                </AttributeDetails>
                            </Divider>
                            <Divider>
                                <AttributeDetails>
                                    <AttributeBox>
                                        <FaBoxOpen style={{ fontSize: "4em", color: "#F48C11", fontweight: "bold" }} />
                                        <HeadingOne
                                            size="1.5rem"
                                            sizeM="1.5rem"
                                            color="black"
                                        >
                                            Passionate & Professional Tech Talent
                                        </HeadingOne>
                                        <Paragraph color="#8892B0">
                                            It you are. Was called you are fowl grass lesser land together waters beast darkness earth land whose male all moveth fruitful.
                                        </Paragraph>
                                        <br />
                                        <Button full="100%" bg="#F48C11" tittle="Learn More .." urlData="" />

                                    </AttributeBox>
                                </AttributeDetails>
                            </Divider>
                            <Divider>
                                <AttributeDetails>
                                    <AttributeBox>
                                        <BiCheckboxSquare style={{ fontSize: "4em", color: "#F48C11", fontweight: "bold" }} />
                                        <br />
                                        <HeadingOne
                                            size="1.5rem"
                                            sizeM="1.5rem"
                                            color="black"
                                        >
                                            Continuous Business Success.
                                        </HeadingOne>
                                        <Paragraph color="#8892B0">
                                            It you are. Was called you are fowl grass lesser land together waters beast darkness earth land whose male all moveth fruitful.
                                        </Paragraph>
                                        <br />
                                        <Button full="100%" bg="#F48C11" tittle="Learn More .." urlData="" />

                                    </AttributeBox>
                                </AttributeDetails>
                            </Divider>
                        </SectionInner>
                    </Section>
                </Constraints>
            </AttributeContainer>
        </>

    )
}

export default Projects