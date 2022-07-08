import React from 'react'
import "./LogoSearch.css";
import Logo from "../../img/logo.png"


const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={Logo} alt="" />
        <div className="search">
            <input type="text" placeholder="search" />
            <div className="s-icon">
                
            </div>
        </div>
    </div>
  )
}

export default LogoSearch