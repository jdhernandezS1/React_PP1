import React from "react";
import { moviesTitle, hvrBounceIn } from "./css/moviesGrid.module.css";

export function App(){
    return (
        <div className= {moviesTitle}> 
            <h2 className= {moviesTitle + " " + hvrBounceIn} >
            Nezfliz
            </h2>
        </div>
    );
}