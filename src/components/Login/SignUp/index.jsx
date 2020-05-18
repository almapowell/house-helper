import React from 'react';
import Modal from 'react-modal';
import {appColors} from 'styles/variables';
import {
    SignUpForm,
    SignUpInput,
    NameInputs,
    NamesDiv,
    FormText,
    SignUpBtn,
    TermsDiv,
    LoginSpan,
} from './styles';

Modal.setAppElement('#root');

const SignUp = ({isOpen, setIsOpen}) => {
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(!isOpen)}
            style={{
                content: {
                    top: '80px',
                    left: '150px',
                    right: '150px',
                    bottom: '80px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: appColors.mainColor,
                    flexDirection: 'column',
                }
            }}>
            <SignUpForm>
                <FormText>
                     <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account!</p>
                </FormText>
               
                <NamesDiv>
                    <NameInputs type="text"
                    placeholder="First Name"
                    />

                    <NameInputs type="text"
                    placeholder="Last Name"
                    /> 
                </NamesDiv>
              

                <SignUpInput type="email"
                placeholder="Email" 
                />

                <SignUpInput type="password"
                placeholder="Password" 
                />

                <SignUpInput type="password"
                placeholder="Confirm Password" 
                />
                <TermsDiv>
                    <input type="checkbox" />
                    <span>
                        I accept the <a> Terms of Use</a> & <a> Privacy Policy</a>.
                    </span>
                </TermsDiv>

                <SignUpBtn>Sign Up</SignUpBtn>

            </SignUpForm>
            <LoginSpan>Already have an account? <a onClick={() => setIsOpen(!isOpen)}>Login here.</a></LoginSpan>

        </Modal>
    )
}
export default SignUp;