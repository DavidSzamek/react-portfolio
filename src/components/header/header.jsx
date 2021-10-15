import "./header.scss";
import {PhoneIphone, Email} from "@mui/icons-material"

export default function header({ menuOpen, setMenuOpen}) {
    return (
        <div className={"header " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#landing" className="logo">David Szamek</a>
                    <div className="itemContainer">
                        <PhoneIphone classname="icon" />
                        <span>+55 555 555</span>
                    </div>

                    <div className="itemContainer">
                        <Email classname="icon"/>
                        <span>davidszamekcoding@gmail.com</span>
                    </div>

                </div>
        
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
