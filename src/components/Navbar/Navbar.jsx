import "./Navbar.scss";

import pinterestLogo from "../../public/photos/Pinterest-logo.png";

const Navbar = () => {

    return (
        <>
            <nav className="nav-left">
                <ul>
                    <img className="logo-pinterest" src={pinterestLogo} alt="pinterest" />
                    <li>Watch</li>
                    <li>Explore</li>
                </ul>
            </nav>

            <nav className="nav-right">
                <ul>
                    <li>About</li>
                    <li>Business</li>
                    <li>Blog</li>
                    <li>Log in</li>
                    <li>Sign up</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar