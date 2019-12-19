import React, { Component } from 'react';
import './SignIn.style.scss';
import FormInput from '../FormInput/FormInput.component';
import  CustomButton from '../CustomButton/CustomeButton.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const initialState = {
    email: '',
    password: ''
}


class SignIn extends Component {
    constructor() {
        super();
        this.state = initialState;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(initialState);
    }
    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an acount</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange = {this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange = {this.handleChange}
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>

        )
    }
}
export default SignIn;