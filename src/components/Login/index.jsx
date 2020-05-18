import React from 'react';
import {
    LoginContainer,
    FromContainer,
    FormInput,
    FromButton,
    SignUpSpan,
    SignUpTag,
    TitleSpan,
} from './styles';




const Login = () => {
    return (
        <LoginContainer>
            <FromContainer>
                    <TitleSpan>Login</TitleSpan>
                    <FormInput type="text"
                    placeholder="Username"
                    />
                    <FormInput type="password"
                    placeholder="Password"
                    />
                    <FromButton>SIGN IN</FromButton>
                    <SignUpSpan>
                        Not Registered? <SignUpTag>Sign Up!</SignUpTag>
                    </SignUpSpan>
            </FromContainer>
        </LoginContainer>
    )
}
export default Login;