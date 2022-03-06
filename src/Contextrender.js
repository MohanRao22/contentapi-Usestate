import React from "react";
import { useContext } from "react";

export function Contextrender() {

    const Context = React.createContext();
    return (
        <div>

            <Context.Provider styling = {{backColor : "black",color:"white"}} >
               {/* <Context /> */}
            </Context.Provider>
        </div>
    )
}