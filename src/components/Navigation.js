import React from "react";
import { Link , useLocation} from "react-router-dom";   

const Navigation = () => {
    const location = useLocation();
    console.log(location);
    return (
        <nav className="nav_bar">
            <ul>
                <li><Link to={"/"} className={location.pathname === "/"?"active": null}>MyLocation</Link></li>
                <li><Link to={"/other-cities"} className={location.pathname === "/other-cities"?"active": null}>OtherCities</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
