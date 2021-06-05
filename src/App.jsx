import React from 'react';
import Stats from './Stats';
import Player from './Player';

// mat: 463, inn: 452, run: 18426, hs: '200*', cen: 49, hc: 96, avg: 44.8
function App() {
    return (
        <>
            <h1 className="heading">Most ODI runs</h1>
            <div className="players">
                {Stats.map((val) => {
                    return (
                        <Player
                            key={val.rank}
                            link={val.link}
                            rank={val.rank}
                            name={val.name}
                            ctry={val.ctry}
                            mat={val.mat}
                            inn={val.inn}
                            run={val.run}
                            hs={val.hs}
                            cen={val.cen}
                            hc={val.hc}
                            avg={val.avg}
                            more={val.more}
                        />
                    );
                })}
            </div>
            <div className="foot">Made by Saurabh Suresh Sawale</div>
        </>);
}

export default App;