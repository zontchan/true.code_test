import React, {useEffect, useState} from 'react';

function Parallax() {
    const [backgroundPosition, setBackgroundPosition] = useState('-120');

    const handleMouseMove = (e) => {
        const screenWidth = window.innerWidth;
        const offsetX = e.clientX;
        const maxX = 100;

        const percentageX = (offsetX / screenWidth) * 100;
        const newPositionX = (percentageX / 100) * maxX - maxX / 2;
        setBackgroundPosition(-newPositionX);
    }

        useEffect(() => {
            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }, []);

        const parallaxStyle = {
            backgroundPosition: `${backgroundPosition}px`,
        };

        return <div className="parallax" style={parallaxStyle}></div>;

}
export default Parallax;