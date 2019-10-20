import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
// import { Link, animateScroll as scroll } from 'react-scroll';

// import logoNav from '../../assets/images/logo.png';
// import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
// import Donate from './Donate';
// import { WindowPropertiesContext } from '../../store/WindowPropertiesStore';
import './Nav.css';

const Nav = ({ drawerToggleClickHandler, setDonateDrawerOpen }) => {

    // const [windowProperties, _] = useContext(WindowPropertiesContext);

    // let headerStyle = 'sticky white-bg full-width flex-centered-vert';
    // if (!windowProperties.navVisible) {
    //     headerStyle = 'header-hidden white-bg full-width flex-centered-vert';
    // }

    // let isDesktop = windowProperties.width >= 1080;

    return (
        <header className="full-width flex">
            <Link to="/" className="black bold larger-font nav-logo flex-centered-vert">
                {/* <img src={logoNav} alt="Лого" className="nav-logo pointer" /> */}
                <img src={logo} alt="Лого" />
                <p>HighExperience</p>
            </Link>
            <nav>
                <ul className="flex">
                    <li className="bold black">8-800-555-35-35</li>
                    <li><Link to="/login" className="border-radius black dark-blue-border log-btn">Войти</Link></li>
                    <li><Link to="/signup" className="border-radius black dark-pink-border sign-btn">Подать заявку</Link></li>
                    {/* <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                        <li className="pointer">О школе</li>
                    </Link>
                    <Link activeClass="active" to="events" spy={true} smooth={true} offset={-80} duration={500}>
                        <li className="pointer text-centered">Регистрация</li>
                    </Link>
                    <Link activeClass="active" to="faq" spy={true} smooth={true} offset={-80} duration={500}>
                        <li className="pointer">F.A.Q.</li>
                    </Link>
                    <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-80} duration={500} style={{marginRight: '.5em'}}>
                        <li className="pointer">Контакты</li>
                    </Link>
                    <Donate setDonateDrawerOpen={setDonateDrawerOpen} isDesktop={isDesktop} /> */}
                </ul>
            </nav>
            {/* <a onClick={() => scroll.scrollToTop({duration: 500})}>
                <img src={logoNav} alt="Лого" className="nav-logo pointer" />
            </a>
            <nav>
                <div className="toggle-btn">
                    <Donate setDonateDrawerOpen={setDonateDrawerOpen} isDesktop={isDesktop} />
                    <div onClick={drawerToggleClickHandler}>
                        <DrawerToggleButton />
                    </div>
                </div>
                <ul>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                        <li className="pointer">О школе</li>
                    </Link>
                    <Link activeClass="active" to="events" spy={true} smooth={true} offset={-80} duration={500}>
                        <li className="pointer text-centered">Регистрация</li>
                    </Link>
                    <Link activeClass="active" to="faq" spy={true} smooth={true} offset={-80} duration={500}>
                        <li className="pointer">F.A.Q.</li>
                    </Link>
                    <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-80} duration={500} style={{marginRight: '.5em'}}>
                        <li className="pointer">Контакты</li>
                    </Link>
                    <Donate setDonateDrawerOpen={setDonateDrawerOpen} isDesktop={isDesktop} />
                </ul>
            </nav> */}
        </header>
    );
}

export default Nav;