import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { connect,  } from 'react-redux'
import Modal from 'react-modal';
import {appColors} from 'styles/variables';
import { signUp } from 'store/users/actions';
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
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });
    const [disabledBtn, setDisabledBtn] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        if(user.password !== user.passwordConfirmation) {
            alert("Passwords don't match.")
            return;
        }
        if(user.firstName && user.lastName && user.email && user.password) {
            signUp(user)
        } 
        console.log(user)
        // localStorage.setItem('myData', user)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name)
        setUser(user => ({ ...user, [name]: value }));
    }

    useEffect(() => {
       console.log(localStorage)
    })

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
            <SignUpForm onSubmit={handleSignUp}>
                <FormText>
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account!</p>
                </FormText>
               
                <NamesDiv>
                    <NameInputs type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={user.firstName}
                        onChange={(e) => handleChange(e)}
                        required
                    />

                    <NameInputs type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={user.lastName}
                        onChange={(e) => handleChange(e)}
                        required
                    /> 
                </NamesDiv>
              

                <SignUpInput type="email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={(e) => handleChange(e)}
                    required
                />

                <SignUpInput type="password"
                    placeholder="Password" 
                    name="password"
                    value={user.password}
                    onChange={(e) => handleChange(e)}
                    required
                />

                <SignUpInput type="password"
                    placeholder="Confirm Password" 
                    name="passwordConfirmation"
                    value={user.passwordConfirmation}
                    onChange={(e) => handleChange(e)}
                    required
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

let mapStateToProps = state => ({
    user: state.users.user
})

const mapDispatchToProps = dispatch => {
    return {
        signUp: () => dispatch(signUp())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)