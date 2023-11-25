import Navigation from "./Navigation";
import logo from '../assets/img/logo.svg';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <div className="header__logo">
                        <a href="!#"><img src={logo} alt=""/></a>
                    </div>
                    <Navigation/>
                </div>
            </div>
        </header>
    );
}