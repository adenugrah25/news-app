import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap'

const NavbarReactstrap = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Navbar style={{background: "rgb(150,150,150)",background: "linear-gradient(90deg, rgba(150,150,150,1) 28%, rgba(0,0,0,1) 100%)"}} light expand="md">
                <NavbarBrand className="text-white" href="/">NewsAPI {props.blangsak}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link className="text-white" to='/'>Home</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link className="text-white" to='/generate-news'>Generate News</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText className="text-white">@adenugrah25</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarReactstrap