import React, { useState } from "react";
import './nav.styles.scss';

export default function Strategy() {
    const [showPopUp, setShowPopUp] = useState(false)
    return(
        <>
        <div className='container navbox'>
            <div className="row nav-box-item">
                <a type='button' className="nav-item btn btn1 col-4" href="#">Strategy</a>
                <a type='button' className="nav-item btn btn2 col-4" href="#">Staking</a>
                <a type='button' className="nav-item btn btn3 col-4" href="#">Saving</a>
            </div>
        </div>
        </>
    )
}