import React from 'react';
import logo from './logo.svg';
import './App.css';
import Water from './Water';
import Fire from './Fire';
import Grass from './Grass';
import Bug from './Bug';
import Normal from './Normal'
import Electric from './Electric'
import Flying from './Flying'
import Ice from './Ice'
import Rock from './Rock'
import Ground from './Ground'
import Fighting from './Fighting'
import Dark from './Dark'
import Poison from './Poison'
import Dragon from './Dragon'
import Steel from './Steel'
import Fairy from './Fairy'
import Psychic from './Psychic'
import Ghost from './Ghost'
import styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
      <p class="title">Pokemon Type Matchups</p>
      <p class="description">
        Click on one of the Pokemon types to see how it matches up against all the other types. 
      </p>
      <br></br>
      <div style={{marginLeft: "12.5%"}}>
       <span class="line1">
         <Water></Water>
       </span>
       <span class="line1">
         <Fire></Fire>
       </span>
       <span class="line1">
         <Grass></Grass>
       </span>
       <span class="line1">
         <Bug></Bug>
       </span>
       <span class="line1">
         <Normal></Normal>
       </span>
       <span class="line1">
         <Electric></Electric>
       </span>
       <span class="line1">
         <Flying></Flying>
       </span>
       </div>
       <br></br>
       <br></br>
       <br></br>
       <br></br>

       <div style={{marginLeft: "12.5%"}}>
       <span class="line2">
         <Ice></Ice>
       </span>
       <span class="line2">
         <Rock></Rock>
       </span>
       <span class="line2">
         <Ground></Ground>
       </span>
       <span class="line2">
         <Fighting></Fighting>
       </span>
       <span class="line2">
         <Dark></Dark>
       </span>
       <span class="line2">
         <Ghost></Ghost>
       </span>
       <span class="line2">
         <Poison></Poison>
       </span>
        </div>
       <br></br>
       <br></br>
       <br></br>
       <br></br>

       <div style={{marginLeft: "12.5%"}}>
         <span class="line3">
           <Dragon></Dragon>
         </span>
         <span class="line3">
           <Steel></Steel>
         </span>
         <span class="line3">
           <Fairy></Fairy>
         </span>
         <span class="line3">
           <Psychic></Psychic>
         </span>
        </div>
    </div>
  );
}

export default App;
