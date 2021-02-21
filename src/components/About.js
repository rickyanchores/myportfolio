import React from "react";

export default function About(){
    return(
        <div className="About" id="About">
            <div className="img-about">
                <img src="https://scontent.fltn2-1.fna.fbcdn.net/v/t1.0-9/45093174_10212921473015866_8798329360139419648_n.jpg?_nc_cat=111&ccb=3&_nc_sid=a4a2d7&_nc_ohc=nfdEoCgxfVAAX_qVQ4r&_nc_ht=scontent.fltn2-1.fna&oh=a41435a89b529c34dc21c201608bf623&oe=604A535D" alt=""/>
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