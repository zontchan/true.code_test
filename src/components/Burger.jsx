import React from 'react';

function Burger({format}) {
    return (
        <a className={`menu-toggle ${format}`}>
            <span className="menu-toggle-bar menu-toggle-bar--top"></span>
            <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
            <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
        </a>
    );
}

export default Burger;