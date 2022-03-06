import React  from "react";
import { useContext } from "react";
import { Contextrender } from "./Contextrender";

export function Context(){

   
    return(
        <div>
           <Context.Consumer>
               {
                   (cont)=>{
                       return(
                           <div>{cont}</div>
                       )
                   }
               }
           </Context.Consumer>
        </div>
    )
}