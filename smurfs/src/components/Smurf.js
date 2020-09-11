import React from 'react';

function Smurf({smurf}) {
    return (
        <div className="smurf"> 
        <h4>{smurf.name}</h4>
        <p>Age: {smurf.age}</p>
        <p>Height: {smurf.height}</p>
        </div>
    )
}

export default Smurf