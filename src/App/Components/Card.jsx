import React from 'react'

export default function Card(props) {
    const backgroundImg = {
        backgroundImage: `url(${props.p.photo})`,
        width: '304px',
        height: '200px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '0',
        borderRadius: '10px 10px 0px 0px'
    }
    
    return (
        <div className='card'>
            <div className="img" style={backgroundImg}></div>
            <div className="cardinfowrap">
                <h4>{props.p.job}</h4>
                <div className="cardinfo">
                    <p>{props.p.description}</p>
                    <p>Duration: {props.p.duration}</p>
                </div>
            </div>
        </div>
    )
}
