import React from 'react';
import sortBy from 'lodash.sortby';
import './Building.css'

function Building({buildingZone, buildings=[]}) {
    const buildingsSorted = sortBy(buildings, ["buildingname"]);

    const divStyle ={
        gridTemplateRows: `repeat(${Math.round(buildings.length/6)}, auto)`
    }
    return (
        <div>
            <h2>{buildingZone}</h2>
            <div className="buildingsContainer" style={divStyle}>
                {buildingsSorted.map((building,index)=>{
                    return (
                        <div className="building" key={index}>
                            {building.black ? building.buildingname : <a href="https://applefacilities.review.blueriver.com">{building.buildingname}</a>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Building;