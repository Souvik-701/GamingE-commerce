import './Navbar.css'
const Navbar=()=>{
    return(
        <nav className="navbar">
            <div className="logo">
                <a href="#"><img src="/images/suruchi-logo_160x@2x.avif" alt="Suruchi Logo" /></a>
            </div>
            <div className="navi">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li id="shop"><a href="#">Shop<i className="fa-solid fa-chevron-down"></i></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Laptops</a></li>
                            <li><a href="#">Smartphones</a></li>
                            <li><a href="#">Tablets</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Gaming</a></li>
                            <li><a href="#">Wearables</a></li>
                            <li><a href="#">Audio</a></li>
                            <li><a href="#">Cameras</a></li>
                            <li><a href="#">Smart Home</a></li>
                            <li><a href="#">Office Equipment</a></li>
                            <li> <a href="#">Mouse</a></li>
                            <li><a href="#">Keyboards</a></li>
                            <li><a href="#">Monitors</a></li>
                            <li><a href="#">Printers</a></li>
                        </ul>
                    </li>
                    <li id="About_Us"><a href="#">About Us<i className="fa-solid fa-chevron-down"></i></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </li>
                    <li id="Contact"><a href="#">Contact<i className="fa-solid fa-chevron-down"></i></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Feedback</a></li>
                        </ul>

                    </li>
                </ul>
            </div>

        <div className="header-icons">
            <input type="text" placeholder="Search..." className="search-input"/>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-user"></i>

            <div className="cart-icon" onclick="openCart()">
                <i className="fa-solid fa-bag-shopping"></i>
                <span id="cart-count">0</span>
            </div>
        </div>
    </nav>
    )
}

export default Navbar