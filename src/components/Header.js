import { useState } from "react";
import { LOGO_URL } from "../utilis/constants"


const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
        <div className='logo-container'>
                <img className='logo-img' src={LOGO_URL}></img>
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <li><button className="login" onClick={()=>{btnNameReact === "Login" ? setBtnNameReact("Logout") :setBtnNameReact("Login");}}>{btnNameReact}</button></li>
          </ul>
        </div>
        
      </div>
  )
}

export default Header

