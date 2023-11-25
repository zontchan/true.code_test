import React from 'react';

function AnimatedLine() {
    return (
        <>
            <svg viewBox="0 0 10 605" fill="none" xmlns="http://www.w3.org/2000/svg" className={'animate-svg'}>
                <path d="M4 3H6V600H4V3Z" fill="#D9D9D9" className={'check'}/>
                <circle cx="5" cy="3" r="3" fill="#D9D9D9" className={'circle-top'}/>
                <circle cx="5" cy="600" r="5" fill="#D9D9D9" className={'circle-bottom'}/>
            </svg>
        </>
    );
}

export default AnimatedLine;