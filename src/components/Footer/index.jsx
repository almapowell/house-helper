import React from 'react';
import {FooterContainer, SocialMediaTag, Tags} from './styles';

const Footer = () => {
    return (
        <FooterContainer>
            <Tags>
                <a>All rights reserved</a> {'  |  '} 
                <a>Terms of Use</a> {'  |  '} 
                <a>Privacy Policy</a> {'  |  '}  
                <a>Contact us</a>
            </Tags>
            <SocialMediaTag>
                Social Media Tags
            </SocialMediaTag>
            <Tags>
              &copy;{new Date().getFullYear()} House Helper, Inc. 
            </Tags>
        </FooterContainer>
    )
}
export default Footer;