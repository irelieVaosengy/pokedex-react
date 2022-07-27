import React from 'react';
import { Container, NavbarBrand} from 'reactstrap';
import { Link } from 'react-router-dom';
import './header.style.scss';
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header className="header">
            <Container className="header__container">
                <NavbarBrand className="header__home-menu" tag={Link} to="/">
                    <img src={logo} className="header__logo"/>
                    <span>Pokedex</span>
                </NavbarBrand>
            </Container>
        </header>
    )
}

export default Header ;
