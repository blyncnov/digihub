import React from 'react';

// Components
import Button from "../constants/Button"

// Data
// import { HeroData } from "../data/HeroData"

// styled-components
import {
    HeroContainerSection, DonateontainerSection,
    DonateBox, DetailedDonateBox, DetailedDonateForm
} from "../styles/styled/HeroIntro"

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow
} from "../styles/constants/Constants"


const HeroIntro = ({ Donate }) => {
    return (
        <>
            <HeroContainerSection>
                <Constraints max="90%">
                    <Section>
                        <SectionInner align="none">
                            <Divider>
                                <HeadingOne
                                    size="2.2rem"
                                    color="#fff">
                                    HI,  WELCOME TO DIGIHUB GREAT EXPERIENCE
                                </HeadingOne>
                                <br />
                                <Paragraph color="rgb(225,225,225,.5)">
                                    The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.
                                    inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct especially
                                    workplace.
                                </Paragraph>

                                <br />
                                <FlexBoxToRow>
                                    <Button Donate={Donate} full="100%" bg="#F48C11" tittle="Explore" urlData="" />
                                    <Button Donate="" full="100%" bgHover="#F48C11" tittle="Contact us" urlData="mailto:bholuwatife00@gmail.com" />
                                </FlexBoxToRow>
                                <br />
                            </Divider>

                            <Divider order="1">
                                <DonateontainerSection>
                                    <DonateBox>
                                        <DetailedDonateBox>
                                            <h2>Join the Waitlist</h2>
                                            <br />
                                            <p>Provide your email to Join the Waitlist and for newletters updates</p>
                                        </DetailedDonateBox>
                                        <DetailedDonateForm>
                                            <form >
                                                <div>
                                                    <label htmlFor="email">Provide your email to get started </label>
                                                    <br />
                                                    <br />
                                                    <input type="email" placeholder="example@digihub.com" />
                                                </div>
                                                <br />
                                                <button type="submit">Join Waitlist</button>
                                            </form>
                                        </DetailedDonateForm>
                                    </DonateBox>
                                </DonateontainerSection>
                            </Divider>

                        </SectionInner>
                    </Section>
                </Constraints>
            </HeroContainerSection>

        </>
    )
}

export default HeroIntro