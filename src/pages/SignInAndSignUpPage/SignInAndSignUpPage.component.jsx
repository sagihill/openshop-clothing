import React from 'react';
import SignIn from '../../components/SignIn/SignIn.component'
import SignUp from '../../components/SignUp/SignUp.component'
import './SignInAndSignUpPage.style.scss';

//This function renders the signin and signup forms
const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>

)

export default SignInAndSignUpPage;