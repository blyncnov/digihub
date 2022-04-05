import React from 'react';
import Image from 'next/image';

import { IconContext } from "react-icons";
import { BsFillJournalBookmarkFill } from "react-icons/bs"

import ShowCase from "../public/Images/3d/rr.png"
import { AboutFoundationObjectives } from "../data/FoundationObjectives"

import {
    AboutFoundationContainer,
    OurGoalShowCase,
} from "../styles/styled/AboutFoundation"

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow
} from "../styles/constants/Constants"


const AboutFoundation = () => {
    return (
        <>
            <IconContext.Provider value={{ color: "#F48C11" }} >
                <AboutFoundationContainer>
                    <Constraints >
                        <Section>
                            <SectionInner >
                                <Divider order="-1" >
                                    <>
                                        <HeadingOne color="#0A192F"
                                            size="clamp(16px,5vw,2rem)"
                                        > DigiHub Foundation
                                        </HeadingOne>
                                        <Paragraph color="#8892B0">
                                            It was called you are fowl grass lesser land together waters beast.
                                        </Paragraph>
                                    </>

                                    <br />
                                    <Paragraph color="#636b83">
                                        The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.
                                        inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct especially
                                        workplace.
                                        <br />
                                        <br />
                                        If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may see some for as low as each.
                                    </Paragraph>
                                    <br />
                                    <br />
                                    <OurGoalShowCase>
                                        {AboutFoundationObjectives.map((skill) => {
                                            return (
                                                <div className="SkillFlexItem" key={skill.id}>
                                                    <div className="" >
                                                        <BsFillJournalBookmarkFill />
                                                    </div>
                                                    <li>{skill.title}</li>
                                                </div>)
                                        })}
                                    </OurGoalShowCase>
                                </Divider>

                                <Divider order="-1">
                                    <Image src={ShowCase} placeholder="blur" blurDataURL={ShowCase} alt="banner" layout="responsive" />
                                </Divider>

                            </SectionInner>
                        </Section>
                    </Constraints>
                </AboutFoundationContainer>
            </IconContext.Provider>
        </>
    )
}

export default AboutFoundation