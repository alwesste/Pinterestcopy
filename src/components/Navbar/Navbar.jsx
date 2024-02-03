import "./Navbar.scss";

import pinterestLogo from "../../public/photos/Pinterest-logo.png";

const Navbar = () => {

    return (
        <nav className="nav">
            <ul className="nav-left">
                <img className="logo-pinterest" src={pinterestLogo} alt="pinterest" />
                <li>Watch</li>
                <li>Explore</li>
            </ul>

            <div className="nav-middle-right">
                <ul className="nav-middle">
                    <li>About</li>
                    <li>Business</li>
                    <li>Blog</li>
                </ul>

                <ul className="nav-right">
                    <li>Login</li>
                    <li>Sign up</li>

                </ul>
            </div>
        </nav>
           
    )
}

export default Navbar