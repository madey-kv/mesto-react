import logo from "../images/logo.svg";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="логотип сайта" className="logo" />
        </header>
    );
}

export default Header;
