import { useState } from "react";
import { LOGO_URL } from "../utilis/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";



const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
 
  const onlineStatus = useOnlineStatus();
 
  return (
    <div className="flex justify-between mb-2">
        <div className='logo-container'>
        <Link to={"/"}>  <img className="w-24" src={LOGO_URL}></img></Link>
        </div>
        <div className='flex items-center'>
          <ul className="flex p-4 m-4">
            <li className="px-2">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
           <li className="px-2"> <Link to={"/"}>Home</Link></li>
            <li className="px-2"><Link to={"/about"}>About</Link></li>
            <li className="px-2"><Link to={"/contact"}>Contact</Link></li>
            <li className="px-2"><button className="login" onClick={()=>{btnNameReact === "Login" ? setBtnNameReact("Logout") :setBtnNameReact("Login");}}>{btnNameReact}</button></li>
          </ul>
        </div>
        
      </div>
  )
}

export default Header

