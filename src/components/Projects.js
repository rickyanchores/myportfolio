import React from "react";

export default function Projects(){
    return(
        <div className="Projects">
            <h1>My Projects</h1>
            <div className="Cards">
                <div className="card">
                    <img className="imgA" src="" alt=""/>
                    <h3>Kahoii</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ipsa commodi deleniti hic laboriosam praesentium?</p>
                    <button><a href="https://rickyanchores.github.io/Kahoii/" target="_blank">LIVE</a></button>
                    <button><a href="https://github.com/rickyanchores/Kahoii" target="_blank">CODE</a></button>
                </div>
                <div className="card">
                    <img className="imgB" src="" alt=""/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ipsa commodi deleniti hic laboriosam praesentium?</p>
                    <button><a href="">LIVE</a></button>
                    <button><a href="" target="_blank">CODE</a></button>
                </div>
                <div className="card">
                    <img className="imgC" src="" alt=""/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ipsa commodi deleniti hic laboriosam praesentium?</p>
                    <button><a href="">LIVE</a></button>
                    <button><a href="" target="_blank">CODE</a></button>
                </div>
            </div>
        </div>
    )
}