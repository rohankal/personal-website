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
    NavBtnLink,
} from './NavbarElements.js'

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
                    <NavBtnLink to='/resume'>Resume</NavBtnLink>
                </NavBtn>
            </NavbarContainer>    
        </Nav>
        </>
    )
}

export default Navbar
