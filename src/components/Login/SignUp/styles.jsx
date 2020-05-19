import styled from '@emotion/styled';
import {FormInput, FormButton} from '../styles';
import {appColors} from 'styles/variables';

export const SignUpForm = styled.form`
height: 80%;
width: 25em;
padding: 20px;
display: flex;
flex-direction: column;
background-color: white;
margin-bottom: 10px;
`;

export const FormText = styled.div`
border-bottom: 1px solid ${appColors.mainColor};
margin-bottom: 20px;
color: ${appColors.mainColor};

h1 {
    margin: 0;
    color: ${appColors.black};
}
p {
    color: grey;
}
`;

export const SignUpInput = styled(FormInput)`
border: ${props => props.missing ? '1px solid red' : '1px solid transparent'};
width: 97%;
`;

export const NamesDiv = styled.div`
display: flex;
justify-content: space-between;
`;

export const NameInputs = styled(FormInput)`
border: ${props => props.missing ? '1px solid red' : '1px solid transparent'};
width: 45%;
`;

export const SignUpBtn = styled(FormButton)`
// background-color:${props => props.disabledBtn ? appColors.mainColor : 'grey'};
background-color:${appColors.mainColor};
color: ${appColors.white};
&:hover {
    background-color: #0E52BA;
}
`;

export const TermsDiv = styled.div`
margin-bottom: 15px;

input {
    margin: 0px 10px 0px 0;
    &: hover {
        cursor: pointer;
    }
}
span {
    color: grey;
    font-size: 12px;
    a {
        color: ${appColors.mainColor};
        &: hover {
            cursor: pointer;
        }
    }
}
`;

export const LoginSpan = styled.span`
color: ${appColors.white};
font-size: 13px;
a {
    border-bottom: 1px solid ${appColors.white};
    &: hover {
        cursor: pointer;
    }
}
`;