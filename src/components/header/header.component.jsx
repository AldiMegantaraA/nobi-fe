import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import {ReactComponent as Logo} from '../../assets/toko aldi.svg';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import logo from '../../assets/logo.png'

const Header = ({currentUser, hidden}) => (
    <>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <div className='container'>
            <a href='/' className='logo-header' style={{width:'60%', height:'auto'}}>
                <img src={logo} className='img-logo' alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <div class="navbar-nav navbar-right ml-auto menu-item">
                    <Link className='option' to='/shop'>
                        Strategy Maker
                    </Link>
                    <hr className='ver-line' />
                    <Link className='option' to='/CONTACT'>
                        Blog
                    </Link>
                    <hr className='ver-line' />
                    {
                        currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>Welcome <strong>{currentUser.displayName}</strong>!</div>
                        :
                        <Link className='option' to='/signin'>Sign In</Link>
                    }
                </div>
            </div>
        </div>
    </nav>
    </>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);