import React, {useState} from 'react';
import SignUp from './SignUp';
import {
    LoginContainer,
    FromContainer,
    FormInput,
    FormButton,
    SignUpSpan,
    SignUpTag,
    TitleSpan,
} from './styles';


const Login = () => {
const [isOpen, setIsOpen] = useState(false)
    return (
        <LoginContainer>
            <FromContainer>
                    <TitleSpan>Login</TitleSpan>
                    <FormInput type="text"
                    placeholder="Email"
                    />
                    <FormInput type="password"
                    placeholder="Password"
                    />
                    <FormButton>SIGN IN</FormButton>
                    <SignUpSpan>
                        Not Registered? <SignUpTag onClick={() => setIsOpen(!isOpen)}>Sign Up!</SignUpTag>
                    </SignUpSpan>
                    <SignUp isOpen={isOpen} setIsOpen={setIsOpen}/>
            </FromContainer>
        </LoginContainer>
    )
}
export default Login;