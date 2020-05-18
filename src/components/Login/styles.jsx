import styled from '@emotion/styled';
import {appColors} from 'styles/variables';

export const LoginContainer = styled.div`
height: 30em;
width: auto;

display: flex;
justify-content: center;
align-items: center;
`;

export const FromContainer = styled.div`
height: 400px;
width: 500px;
background: ${appColors.mainColor};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
box-shadow: 6px 8px 15px ${appColors.black};
`;

export const FormInput = styled.input`
height: 45px;
width: 50%;
border: none;
border-radius: 5px;
margin-bottom: 15px;
padding-left: 10px;
outline: none;
font-size: 13px;
background: ${appColors.white};

`;

export const FromButton = styled.button`
height: 45px;
width: 40%;
border: none;
border-radius: 5px;
margin-bottom: 15px;
color: white;
outline: none;
background-color: ${appColors.black};

&:hover {
    cursor: pointer;
    background-color: #444444;
}
`;

export const SignUpSpan = styled.span`
font-size: 12px;
color: lightgrey;
`;

export const SignUpTag = styled.a`
border-bottom: 1px solid lightgrey;
&:hover {
    cursor: pointer;
}
`;

export const TitleSpan = styled.span`
position: relative;
bottom: 40px;
color: ${appColors.white};
font-size: 35px
`;