import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomeButton.component';
import './SignUp.style.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

class SignUp extends Component {
    constructor() {
        super();
        this.state = initialState;
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if(password!==confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({initialState});
        } catch (error) {
            console.log('error creating user', error.message);
        }
        

        this.setState(initialState);
    }

    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an acount</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit = {this.handleSubmit}>
                    <FormInput 
                        name='displayName' 
                        type='text' 
                        value={displayName} 
                        handleChange = {this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={email} 
                        handleChange = {this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={password} 
                        handleChange = {this.handleChange}
                        label='Password'
                        required
                    />
                     <FormInput 
                        name='confirmPassword' 
                        type='password' 
                        value={confirmPassword} 
                        handleChange = {this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign Up</CustomButton>
                    </div>
                </form>
            </div>

        )
    }
}
export default SignUp;