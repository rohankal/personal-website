import React, {button}  from 'react'
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
    NavBtnLink,
    Btn
} from './NavbarElements.js'

import PDF from "../../images/resume.pdf"
import { pdfjs } from 'react-pdf'

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Rohan Kalra</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About Me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'>Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='links'>Links</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'>Contact Me</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <Btn href={PDF} target="_blank">Resume</Btn>
                </NavBtn>
            </NavbarContainer>    
        </Nav>
        </>
    )
}

export default Navbar
