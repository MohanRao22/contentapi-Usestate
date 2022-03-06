import React, { useState } from 'react';
import index from './index';
import { UseState } from 'react';


export function Custom(){

    // const[bgcolor, setBg] = useState("White");
 

    const[bgs,setBg] = useState("White");
    const[btnColor,setBtnColor] = useState("white");

    var sty = {
        backgroundColor : bgs
    }
    var styBtn = {
        backgroundColor : bgs == "white" ?  "black" : "white",
        color :  bgs == "white" ?  "white" : "black",
    }

    return(
        <div className='ct-1' style={sty}>
           <button  className='bts'  style={styBtn} onClick={()=>{
               setBg("black");
               console.log(bgs);
           }}>Light Mode</button>
           <button className='bts' style={styBtn} onClick={()=>{
                setBg("white");
                console.log(bgs);
           }}>Dark Mode</button>
        </div>
    )
}