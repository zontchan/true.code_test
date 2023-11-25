import React from 'react';
import AnimatedLine from "./AnimatedLine";
import Banner from "./Banner";

function Main(props) {
    return (
        <main className="main">
            <div className="container">
                <div className="main__container">
                    <AnimatedLine/>
                    <h2>точка назначения:</h2>
                    <Banner/>
                </div>
            </div>
        </main>
    );
}

export default Main;