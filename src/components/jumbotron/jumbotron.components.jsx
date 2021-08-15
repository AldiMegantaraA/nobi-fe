import React from 'react';
import jumboImg from '../../assets/3.png';
import appStore from '../../assets/appstore.svg';
import androidStore from '../../assets/android.png';
import './jumbotron.styles.scss';

const Jumbotron = () => (
    <>
    <div className='jumbotron .desktop'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-8 col-sm-12 col-md-12'>
                    <h1 className='text-white font-weight-bold'>Grow Crypto The Easy Way</h1>
                    <h4 className='text-white'>Automate your crypto trading strategy and take you emotion out of the equation</h4>
                    <div className='download-app'>
                        <a href="#">
                            <img src={appStore} style={{width:'20%', height:'auto', marginRight: '12px'}} alt="" />
                        </a>
                        <a href="#">
                            <img src={androidStore} style={{width:'20%', height:'auto', marginRight: '12px'}} alt="" />
                        </a>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-12 col-md-12'>
                    <img src={jumboImg} style={{width: "100%", height: 'auto'}} alt="" />
                </div>
            </div>
        </div>
    </div>
    <div className='mobile'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-4 col-sm-12 col-md-12'>
                    <img src={jumboImg} style={{width: "100%", height: 'auto'}} alt="" />
                </div>
                <div className='col-lg-8 col-sm-12 col-md-12'>
                    <h1 className='text-white font-weight-bold'>Grow Crypto The Easy Way</h1>
                    <h4 className='text-white'>Automate your crypto trading strategy and take you emotion out of the equation</h4>
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
    </>
)

export default Jumbotron;