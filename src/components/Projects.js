import React from "react";

export default function Projects(){
    return(
        <div className="Projects">
            <h1>My Projects</h1>
            <div className="Cards">
                <div className="card">
                    <img className="imgA" src="" alt=""/>
                    <h3>Kahoii</h3>
                    <p>Website made with HTML, CSS and JS AoS animation</p>
                    <button><a href="https://rickyanchores.github.io/Kahoii/" target="_blank">LIVE</a></button>
                    <button><a href="https://github.com/rickyanchores/Kahoii" target="_blank">CODE</a></button>
                </div>
                <div className="card">
                    <img className="imgB" src="" alt=""/>
                    <h3>Zenkana</h3>
                    <p>React Website with minimalist design (my custom TEMPLATE)</p>
                    <button><a href="https://rickyanchores.github.io/zenkana/">LIVE</a></button>
                    <button><a href="https://github.com/rickyanchores/zenkana" target="_blank">CODE</a></button>
                </div>
                <div className="card">
                    <img className="imgC" src="" alt=""/>
                    <h3>Rickolor</h3>
                    <p>Landing Page with personal design using Adobe XD</p>
                    <button><a href="https://rickyanchores.github.io/rickolor/">LIVE</a></button>
                    <button><a href="https://github.com/rickyanchores/rickolor" target="_blank">CODE</a></button>
                </div>
            </div>
        </div>
    )
}