import React from 'react';

import './learn-more.styles.scss';
import imgLearn from '../../assets/4.png'
import OriginalButton from '../original-button/original-button.component';

const LearnMore = () => (
    <>
    <div className='container learnmore'>
        <div className='row align-items-center'>
            <div className='col-lg-4 col-md-12 col-sm-12'>
                <img src={imgLearn} style={{width:'100%', height:'auto'}} alt="" />
            </div>
            <div className='col-lg-8 col-md-12 col-sm-12'>
                <h1>Create Your Own Strategy and Become a Strategy Maker</h1>
                <div className='box-originibutton'>
                    <OriginalButton>Learn More</OriginalButton>
                </div>
            </div>
        </div>
    </div>
    </>
)

export default LearnMore;