import React from "react";
const Header = () => {
    return (
        <React.Fragment>
            <header className="header-navigation">
                <div>
                    <span ><b><i>DC-Projects</i></b></span>
                </div>
                <div className="counter-end">
                    <nav>
                        <button href="#"><b>THE COUNTER APP</b></button>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;