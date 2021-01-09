import React from "react";

export default function About(){
    return(
        <div className="About">
            <div className="img-about">
                <img src="https://scontent.fbhx3-1.fna.fbcdn.net/v/t1.0-9/70275674_10214941485714921_8756992340024885248_n.jpg?_nc_cat=110&ccb=2&_nc_sid=174925&_nc_ohc=fwT81gfZG7wAX9eyFjA&_nc_ht=scontent.fbhx3-1.fna&oh=33ace2a32ad5985d5c3a759d920de418&oe=6020C160" alt=""/>
            </div>
            <div className="txt-about">
                <h3>About</h3>
                <p>I'm Ricky, a Front End Developer based in London,UK <br/>
                Web Dev and Design </p>
                <br/>
                <h3>Skills:</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                    <li>SASS</li>
                    <li>React</li>
                    <li>Figma</li>
                    <li>Adobe XD</li>
                </ul>
            </div>
        </div>
    )
}