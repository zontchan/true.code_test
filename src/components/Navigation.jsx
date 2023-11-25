import React, {useContext} from 'react';
import {PopupContext} from "../App";

function Navigation() {
    const {setIsPopupOpen} = useContext(PopupContext);
    const navList = ['О марсе', 'Процесс', 'Билеты', 'Новости', 'Контакты'];

    const handleClick = (e) => {
        e.preventDefault();
        setIsPopupOpen(true);
        document.body.style.overflow = 'hidden'
    }
    return (
        <nav className="header__nav">
            <div className="header__nav-dropdown">
                <div className="header__nav-list header__nav-dropdown-list">
                    {navList.map((o,i) => <div key={i}><a href="#!">{o}</a></div>)}
                    <button className="header__nav-button button" onClick={(e) => handleClick(e)}>Купить билеты</button>
                </div>
                <div className={'header__nav-dropdown-button'}><svg viewBox="0 0 24 24" fill={'#8C2D18'} xmlns="http://www.w3.org/2000/svg"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/></svg></div>
            </div>

        </nav>
    );
}

export default Navigation;