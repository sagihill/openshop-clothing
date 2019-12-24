import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/open-logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import './Header.style.scss';

const Header = ({ currentUser, isCartHidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                (
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                )
                :
                (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                )
            }
            <CartIcon />  
        </div>
        {
            !isCartHidden ?
            (
                <CartDropdown />
            )
            :
            (
                null
            )
        }
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isCartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);