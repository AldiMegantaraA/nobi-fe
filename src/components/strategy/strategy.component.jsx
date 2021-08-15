import React from 'react';
import OriginalButton from '../original-button/original-button.component';
import './strategy.styles.scss';

export default function Strategy() {
    const persentage = { 
        "peopledata": 
            [
                {"Strategy": "DASH", "Marketcap": "Nova Kapital", "Volume": "$148,574.33", "Est. Annual Yield": "-12.45%", "Node Collateral": "-2.12%", "Hosted Node": "-212.3%",  "1Month": "+212.3%"},
                {"Strategy": "SMART", "Marketcap": "Nova Kapital", "Volume": "$148,574.33", "Est. Annual Yield": "-2.36%", "Node Collateral": "-1.45%", "Hosted Node": "+212.3%", "1Month": "+212.3%",},
                {"Strategy": "ZCOIN", "Marketcap": "Nova Kapital", "Volume": "$148,574.33", "Est. Annual Yield": "-1.66%", "Node Collateral": "-1.21%", "Hosted Node": "+212.3%", "1Month": "+212.3%",},
                {"Strategy": "Nova Obscura", "Marketcap": "Nova Kapital", "Volume": "$148,574.33", "Est. Annual Yield": "-7.50%", "Node Collateral": "-2.22%", "Hosted Node": "+212.3%", "1Month": "+212.3%",},
                {"Strategy": "Neu Osccillator", "Marketcap": "Nova Kapital", "Volume": "$148,574.33", "Est. Annual Yield": "-8.92%", "Node Collateral": "-3.23%", "Hosted Node": "-212.3%", "1Month": "+212.3%",},
            ]
    }
    return(
        <>
        <div className='container table-container'>
            <table class="table table-default table-responsive" >
                <thead style={{background:'rgba(80, 80, 80, 0.336)'}}>
                    <tr class="table-active">
                    <th scope="col" className='align-top'>Strategy</th>
                    <th scope="col" className='align-top'>Marketcap</th>
                    <th scope="col" className='align-top'>Volume</th>
                    <th scope="col" className='align-top'>Est. Anuual Yield</th>
                    <th scope="col" className='align-top'>Node Collateral</th>
                    <th scope="col" className='align-top'>Hosted Node</th>
                    <th scope="col" className='align-top'>1Month</th>
                    <th scope="col" className='align-top'></th>
                    <th scope="col" className='align-top'></th>
                    </tr>
                </thead>
            {
                persentage["peopledata"].map((persentage, index) =>(
                    <tbody key={index} data={persentage} style={{border: 'none', background: index%2 === 1 ? 'rgba(80, 80, 80, 0.336)' : index}}>
                        <tr>
                        <th className='align-middle' scope="row"><a href="" className='title'>{persentage.Strategy}</a></th>
                        <td className='align-middle'>{persentage.Marketcap}</td>
                        <td className='align-middle'>{persentage.Volume}</td>
                        <td className='align-middle' style={{color: persentage['Est. Annual Yield'][0] === '-' ? 'rgb(255, 48, 48)' : 'rgb(0, 212, 142)'}}>{persentage['Est. Annual Yield']}</td>
                        <td className='align-middle' style={{color: persentage['Node Collateral'][0] === '-' ? 'rgb(255, 48, 48)' : 'rgb(0, 212, 142)'}}>{persentage['Node Collateral']}</td>
                        <td className='align-middle' style={{color: persentage['Hosted Node'][0] === '-' ? 'rgb(255, 48, 48)' : 'rgb(0, 212, 142)'}}>{persentage['Hosted Node']}</td>
                        <td className='align-middle' style={{color: persentage['1Month'][0] === '-' ? 'rgb(255, 48, 48)' : 'rgb(0, 212, 142)'}}>{persentage['1Month']}</td>
                        <td className='align-middle' style={{color: persentage['1Month'][0] === '-' ? 'rgb(255, 48, 48)' : 'rgb(0, 212, 142)'}}>{persentage['1Month']}</td>
                        <td className='align-middle' style={{color: persentage['1Month'][0] === '-' ? 'rgb(255, 48, 48)' : 'rgb(0, 212, 142)'}}>{persentage['1Month']}</td>
                        </tr>
                    </tbody>
                ))
            }
            </table>
            <div className='explore-btn'>
                <OriginalButton>Explore More</OriginalButton>
            </div>
        </div>
        </>
    )
}