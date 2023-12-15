import { useState } from "react";
import { LOGO_URL } from "../utilis/constants"
import { Link } from "react-router-dom";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
        <div className='logo-container'>
        <Link to={"/"}>  <img className='logo-img' src={LOGO_URL}></img></Link>
        </div>
        <div className='nav-items'>
          <ul>
           <li> <Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><button className="login" onClick={()=>{btnNameReact === "Login" ? setBtnNameReact("Logout") :setBtnNameReact("Login");}}>{btnNameReact}</button></li>
          </ul>
        </div>
        
      </div>
  )
}

export default Header

