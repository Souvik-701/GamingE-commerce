import "./Header.css"

const Header=()=>{
    return(
        <header className="header">


        <div className="socialmedia">
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-tiktok"></i>
        </div>

        <div className="welcome">
            <p>Welcome to our store</p>
        </div>

        <div className="dropdown-wrapper">

            <div className="dropdown">

                <button className="dropdown-btn">
                    Select Currency
                    <i className="fa-solid fa-chevron-down"></i>
                </button>

                <div className="dropdown-content">

                    <div>Afghan Afghani (AFN)</div>
                    <div>Euro (EUR)</div>
                    <div>British Pound (GBP)</div>
                    <div>Japanese Yen (JPY)</div>
                    <div>Indian Rupee (INR)</div>
                    <div>Chinese Yuan (CNY)</div>
                    <div>Australian Dollar (AUD)</div>
                    <div>Canadian Dollar (CAD)</div>
                    <div>Swiss Franc (CHF)</div>
                    <div>New Zealand Dollar (NZD)</div>
                    <div>South African Rand (ZAR)</div>
                    <div>Brazilian Real (BRL)</div>
                    <div>Russian Ruble (RUB)</div>
                    <div>United States Dollar (USD)</div>
                    <div>Mexican Peso (MXN)</div>
                    <div>Singapore Dollar (SGD)</div>
                    <div>Hong Kong Dollar (HKD)</div>
                    <div>Swedish Krona (SEK)</div>
                    <div>Norwegian Krone (NOK)</div>

                </div>

            </div>

            <div className="dropdown">

                <button className="dropdown-btn">
                    Select Language
                    <i className="fa-solid fa-chevron-down"></i>
                </button>

                <div className="dropdown-content">

                    <div>English</div>
                    <div>Spanish</div>
                    <div>French</div>
                    <div>German</div>
                    <div>Japanese</div>
                    <div>Chinese</div>
                    <div>Hindi</div>

                </div>

            </div>

        </div>

    </header>
    )
}

export default Header