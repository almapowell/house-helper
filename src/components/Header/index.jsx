import React from 'react';
import {HeaderWrapper, NavLinks, HomeDiv,HomeLink,NavElement} from './styles';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <HeaderWrapper>
            <HomeDiv>
                <HomeLink exact to="/" activeClassName="main-nav-active">Home</HomeLink> 
            </HomeDiv>
            <NavLinks>
                <NavElement to="/add-project" activeClassName="main-nav-active">Add Project</NavElement> 
                <NavElement to="/search-listings" activeClassName="main-nav-active">Search Listings</NavElement> 
                <NavElement to="/login" activeClassName="main-nav-active">Login</NavElement> 
            </NavLinks>
        </HeaderWrapper>

    )
}
export default Header;