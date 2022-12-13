import React from "react";
import '../styles/Logo.css';


const Logo = ({logo}) => (

    <div className="contenedor-logo">
        <img className="logo" 
        src={require(`../assets/${logo}.png`)}
        alt="logo"/>
    </div>

);


export default Logo;
