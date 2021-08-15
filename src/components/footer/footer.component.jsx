import React from 'react'
import './footer.styles.scss'
import {BiCopyright, BiChat} from 'react-icons/bi'
import {BsCircleFill} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FiYoutube, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import logo from '../../assets/logo.png'


const Footer = () => (
    <>
    <div className='footer desktop'>
        <div className='container footer-box'>
            <div className='row footer-menu'>
                <a href='/' className='logo'>
                    <img src={logo} style={{width:'20%', height:'auto'}} className='img-logo' alt="" />
                </a>
                <ul className='col-lg-4 text-left'>
                    <li>
                        Copyright <BiCopyright/> 2020 Nobi.<br/>All trademarks and copyrights belong to their respective owners.
                    </li>
                </ul>
                <ul className='col-lg-4 middle'>
                    <li className='align-items-center'>
                        <BsCircleFill style={{width:'12px', position:'relative', top:'2.5%'}}/> English
                    </li>
                    <li>
                        <Link className='footer-link'>
                            Terms
                        </Link>
                    </li>
                    <li>
                        <Link className='footer-link'>
                            Contacy Us
                        </Link>
                    </li>
                </ul>
                <ul className='col-lg-4 text-right'>
                    <li>
                        Join Our Community
                    </li>
                    <div className='social'>
                        <li>
                            <Link className='social-link'>
                                <BiChat style={{width:'4vmin', height:'4vmin'}}/>
                            </Link>
                        </li>
                        <li>
                            <Link className='social-link'>
                                <FiYoutube style={{width:'4vmin', height:'4vmin'}}/>
                            </Link>
                        </li>
                        <li>
                        <Link className='social-link'>
                                <FiFacebook style={{width:'4vmin', height:'4vmin'}}/>
                            </Link>
                        </li>
                        <li>
                            <Link className='social-link'>
                                <FiTwitter style={{width:'4vmin', height:'4vmin'}}/>
                            </Link>
                        </li>
                        <li>
                            <Link className='social-link'>
                                <FiInstagram style={{width:'4vmin', height:'4vmin'}}/>
                            </Link>
                        </li>
                        <li>
                            <Link className='social-link'>
                                <FaTelegramPlane style={{width:'4vmin', height:'4vmin'}}/>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
    </>
)

export default Footer;