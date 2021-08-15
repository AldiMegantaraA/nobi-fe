import React from 'react';

import './original-button.styles.scss';
import {BsArrowRight} from 'react-icons/bs';


const OriginalButton = ({children}) => (
    <button className='btn-primary original-button'>
        {children} <hr /> <BsArrowRight/>
    </button>
);

export default OriginalButton;