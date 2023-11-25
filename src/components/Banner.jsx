import React from 'react';
import video from '../assets/video/Mars.mp4';

function Banner(props) {
    return (
        <div className="banner">
            <h1>Марс</h1>
            <video autoPlay playsInline muted loop>
                <source src={video}/>
            </video>
        </div>
    );
}

export default Banner;