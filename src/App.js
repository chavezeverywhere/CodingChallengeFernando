import React,{useEffect, useState} from 'react';
import groupBy from 'lodash.groupby';
import omit from 'lodash.omit';
import {requestToAPI} from './API/API';
import Buildings from './components/Building';
import './App.css';

function App() {

  const [result,setResult] = useState([]);

  useEffect(()=>{
    requestToAPI().then((result)=>{
      setResult(result.items);
    });
  },[]);

  const buildingZones = groupBy(result, 'buildingzone');
  const buildingZonesWithoutOther = omit(buildingZones,["","Other Bay Area"]);
  const sortedBuldingZones = Object.keys(buildingZonesWithoutOther).sort();

  return (
    <div className="App">
      <h1>INDEX</h1>
      {sortedBuldingZones.map((buildingZone,index)=>{
        return <Buildings buildingZone={buildingZone} buildings={buildingZonesWithoutOther[buildingZone]} key={index}/>
      })}
      <Buildings buildingZone="Other Bay Area" buildings={buildingZones["Other Bay Area"]} />
      <Buildings buildingZone="Others" buildings={buildingZones[""]} />
    </div>
  );
};

export default App;
