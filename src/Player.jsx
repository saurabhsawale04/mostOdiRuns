import React from 'react';
// key = {val.rank}
// link = {val.link} 
// rank = {val.rank}
// name = {val.name}
// ctry = {val.ctry}
// mat = {val.mat}
// inn = {val.inn}
// run = {val.run}
// hs = {val.hs}
// cen = {val.cen}
// hc = {val.hc}
// avg = {val.avg}
function Player(props) {
    return (

        <div className="player">
            <img src={props.link} alt={props.name} className="image" />
            <div className="info">
                {/* <span className="rank">{props.rank}</span> */}
                <h2 className="name">{props.rank}.{" "}{props.name}</h2>
                <div className="stats">
                    <ul className="pstats">
                        <li className="ctry">Country : {props.ctry}</li>
                        <li className="matorinn">Mat/Inn : {props.mat}/{props.inn}</li>
                        <li className="run">Runs : {props.run}</li>
                        <li className="hs">High Score : {props.hs}</li>
                        <li className="cenorhc">100/50 : {props.cen}/{props.hc}</li>
                        <li className="avg">Average : {props.avg}</li>
                        

                    </ul>
                </div>
                <a href={props.more} target='_blank' className="xyz" rel="noreferrer" >
                    <button className="btn" >More about player</button>
                </a>
            </div>
        </div>
    );
}

export default Player;