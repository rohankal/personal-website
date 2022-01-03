import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    Btn
} from './NavbarElements.js'

import PDF from "../../images/resume.pdf"

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>rohan kalra</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                            to='about'
                            primary='true'
                            dark='true'
                            smooth={true}
                            duation={500}
                            spy={true}
                            exact='true'
                            offset={-80}>about</NavLinks>
                    </NavItem>
                    {/* <NavItem>
                        <NavLinks to='projects'>Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='links'>Links</NavLinks>
                    </NavItem> */}
                    <NavItem>
                        <NavLinks 
                            to='contact'
                            primary='true'
                            dark='true'
                            smooth={true}
                            duation={500}
                            spy={true}
                            exact='true'
                            offset={-80}>contact</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <Btn href={PDF} target="_blank">resume</Btn>
                </NavBtn>
            </NavbarContainer>    
        </Nav>
        </>
    )
}

export default Navbar
