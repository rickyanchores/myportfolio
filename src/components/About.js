import React from "react";

export default function About(){
    return(
        <div className="About" id="About">
            <div className="img-about">
                <img src="https://scontent.fltn2-1.fna.fbcdn.net/v/t1.0-9/45093174_10212921473015866_8798329360139419648_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a4a2d7&_nc_ohc=kv4wY_AH6NsAX8WAFRg&_nc_ht=scontent.fltn2-1.fna&oh=68ff2e3f77c52c1fcaceb979ecd7bf70&oe=6071E05D" alt=""/>
            </div>
            <div className="txt-about">
                <h3>About</h3>
                <p>I'm Ricky, a Front End Developer based in London,UK <br/>
                Web Dev and Design.

                Well organised person, problem solver, independent employee with high attention to detail.
                Music and Art passionate.               
                </p>
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