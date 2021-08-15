import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Jumbotron from '../../components/jumbotron/jumbotron.components';
import LearnMore from '../../components/learn-more/learn-more.component';
import Nav from '../../components/nav/nav.component';
import Strategy from '../../components/strategy/strategy.component';
import './homepage.styles.scss'

import downloadApp from '../../assets/5.png'
import fund from '../../assets/6.png'
import startApp from '../../assets/7.png'
import startImg from '../../assets/8.png'
import binance from '../../assets/binance.png'
import hunt from '../../assets/huntwine.png'
import bitmex from '../../assets/bitmex.png'
import appStore from '../../assets/appstore.svg'
import androidStore from '../../assets/android.png'
import Footer from '../../components/footer/footer.component';

const HomePage = () => (
    <>
        <Jumbotron/>
        <div className='sec-nav'>
            <Nav/>
            <Strategy/>
        </div>
        <LearnMore/>
        <div className='growing-crypto'>
            <div className='container'>
                <h1 className='title font-weight-bold' style={{color: 'white', fontSize: '5vmin'}}>Growing Crypto Has Never Been This Easy!</h1>
                <h4 style={{color: 'white', fontSize: '2.7vmin', marginTop:'14px', marginBottom:'24px'}}>NOBI make it safe and easy to trade with our Robo Trading! 
                    Just choose the available strategy and let
                    ou strategy makers do the magic for you.
                </h4>
                <div className='row desktop'>
                    <div>
                        <img src={downloadApp} alt="" />
                        <h4>Download App</h4>
                    </div>
                    <FiArrowRight/>
                    <div>
                        <img src={fund} alt="" />
                        <h4>Fund Your Wallet</h4>
                    </div>
                    <FiArrowRight/>
                    <div>
                         <img src={startApp} alt="" />
                        <h4>Start Following Strategy</h4>
                    </div>
                </div>
                <div className='row mobile'>
                    <div className='grow-mobile'>
                        <img src={downloadApp} alt="" />
                        <h4>Download App</h4>
                    </div>
                    <div className='grow-mobile'>
                        <img src={fund} alt="" />
                        <h4>Fund Your Wallet</h4>
                    </div>
                    <div className='grow-mobile'>
                         <img src={startApp} alt="" />
                        <h4>Start Following<br/>Strategy</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='start-sec'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <img src={startImg} style={{width: '100%', height: 'auto'}} alt="" />
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                        <h1 className='font-weight-bold'>Start With as Little as B0.01</h1>
                        <h4>You can start growing your bitcoin and other cryptocurrencies from
                            as low B 0.01 Trade better by following our Trading and Strategy.
                            Our technology will help you minimize risks and enhance your gain. 
                            Simply choose &amp; follow!
                        </h4>
                        <div className='download-app'>
                            <a href="#">
                                <img src={appStore} style={{width:'20%', height:'auto', marginRight: '12px'}} alt="" />
                            </a>
                            <a href="#">
                                <img src={androidStore} style={{width:'20%', height:'auto', marginRight: '12px'}} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className='line-blue'/>
        <div className='powered-sec'>
            <div className='container'>
                <h1 className='font-weight-bold'>Powered By Industry Best</h1>
                <div className='row align-items-center justify-content-center'>
                    <img className='col-lg-4 col-md-6 col-sm-6' src={binance} alt="" />
                    <img className='col-lg-4 col-md-6 col-sm-6' src={bitmex} alt="" />
                    <img className='col-lg-4 col-md-12 col-sm-12' src={hunt} alt="" />
                </div>
            </div>
        </div>
        <div className='wiating-sec'>
            <div className='container'>
                <h1 className='font-weight-bold'>So, What Are You Waiting For?</h1>
                <h4>Start growing your crypto and join countless crypto believers who have sucessfully grow with us!</h4>
                <div className='download-app'>
                    <a href="#">
                        <img src={appStore} style={{width:'20%', height:'auto', marginRight: '12px'}} alt="" />
                    </a>
                    <a href="#">
                        <img src={androidStore} style={{width:'20%', height:'auto', marginRight: '12px'}} alt="" />
                    </a>
                </div>
                <p>Risk warning: Buying, selling, holding and partaking in trading of cryptocurrencies are activities that are subject
                    to high market risk. The volatile and unpredictable nature of the price of cryptocurrencies may result in significant
                    loss.
                </p>
            </div>
        </div>
        <Footer/>
    </>
)

export default HomePage;