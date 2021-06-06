import React from "react";
import { withRouter } from 'react-router-dom'
import { HashLink } from "react-router-hash-link";


function Header(props){
    console.log(props)
    return(
    <div className="Header">
        <div className="logo">
            <a href=""><h1>Ricky A</h1></a>
        </div>
        
        <div className="nav">
            <ul>
                <li>
                    <HashLink smooth to="/#Showcase">Home</HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#Projects">Projects</HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#About">About</HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#Contacts">Contacts</HashLink>
                </li>
            </ul>
        </div>

    </div>
    )};

    export default withRouter(Header)