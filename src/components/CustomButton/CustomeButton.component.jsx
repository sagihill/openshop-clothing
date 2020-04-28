import React from 'react';
import './CustomButton.style.scss'

const CustomButton = ({ children, isGoogleSignIn, isCheckOut ,inverted,  ...otherProps}) => {
    return (
        <button className={`${inverted ? 'inverted ' : ''}${isCheckOut ? 'check-out-button ' : ''}${isGoogleSignIn ? 'google-sign-in ' : ''}custom-button` }{...otherProps} >
            {children}
        </button>
    )
}

export default CustomButton;