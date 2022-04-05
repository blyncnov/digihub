import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IconContext } from "react-icons";

import { FaTimes } from 'react-icons/fa'
import { RiBarChartHorizontalLine } from "react-icons/ri"

// Components
import Button from "../constants/Button"

// Data
import { Logo, NavigationLists } from "../data/Navigation"

// styled-components
import {
    NavigationContainerWrapper,
    NavigationContainer,
    NavigationWrapper,
    NavigationItem,
    MobileIcon,
    NavigationShadow, NavigationUpperDetails,
} from "../styles/styled/Navigation"

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow
} from "../styles/constants/Constants"


const Navigation = ({ Donate }) => {
    const [isclicked, setIsClicked] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const isClickedHandler = () => {
        setIsClicked(!isclicked)
    }

    console.log(Donate);

    useEffect(() => {

        const isScrolledHandler = () => {
            if (window.scrollY >= 100) {
                setIsScroll(true)
                console.log(window.scrollY);
            }
            else {
                setIsScroll(false)
            }
        }

        window.addEventListener("scroll", isScrolledHandler);

        return () => window.removeEventListener("scroll", isScrolledHandler);

    }, [])


    return (
        <>
            <IconContext.Provider value={{ color: "black" }} >
                <NavigationContainerWrapper>
                    <NavigationContainer scroll={isScroll}>
                        {/*   <== You can pass a Max props e.g <Constraints  Max="90% /> 
                to  Add a constraint , the default Value is 90% ==>  */}
                        <NavigationUpperDetails>
                            <br />
                            <Constraints>
                                <SectionInner>
                                    <Divider>
                                        <FlexBoxToRow style={{ color: "#black" }}>
                                        </FlexBoxToRow>
                                    </Divider>
                                    <Divider>

                                        <FlexBoxToRow style={{ color: "black", justifyContent: "flex-end" }}>
                                            <li> Email: vitriol@digihub.com</li>
                                            <li> Phone: +234 (0) 814 9050 68 </li>
                                        </FlexBoxToRow>

                                    </Divider>
                                </SectionInner>
                            </Constraints>
                        </NavigationUpperDetails>
                        <Constraints >
                            <NavigationWrapper>
                                <div className="Logo">
                                    {/* <h1>!{Logo}</h1> */}
                                    <Image src={Logo} alt="Logo" height={50} width={100} />
                                </div>

                                <NavigationShadow clicked={isclicked} onClick={isClickedHandler} >
                                    <NavigationItem>
                                        {NavigationLists.map((list) => {
                                            return (
                                                <Link onClick={isClickedHandler} key={list.id} passHref={true} style={{ color: "#64ffda" }} href={`/${list.navigate}`} >
                                                    <li>
                                                        {list.name}
                                                    </li>
                                                </Link>
                                            )
                                        })}
                                        <Button
                                            bg="#F48C11"
                                            bgHover="#EF4B20"
                                            colorHover="#EF4B20"
                                            border="#F48C11"
                                            Donate={Donate}
                                            full="100%"
                                            tittle="Apply Now"
                                        />
                                    </NavigationItem>
                                </NavigationShadow>

                                <MobileIcon onClick={isClickedHandler} >
                                    {isclicked ? <FaTimes style={{ fontSize: "2em", fontweight: "bold" }} /> : <RiBarChartHorizontalLine style={{ fontSize: "2em", fontweight: "bold" }} />}
                                </MobileIcon>

                            </NavigationWrapper>
                        </Constraints>
                    </NavigationContainer>
                </NavigationContainerWrapper>
            </IconContext.Provider>
        </>
    )
}

export default Navigation