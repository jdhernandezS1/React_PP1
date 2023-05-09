import React, { useState } from "react";
import { Link } from "react-router-dom";
import { moviesTitle, hvrBounceIn } from "../../css/moviesGrid.module.css";
import { item } from "../../css/Header/nav.module.css";

export function NavBarPc() {
    return (
        <>
            <nav>
                <span className={moviesTitle + " " + hvrBounceIn} >
                    OmeCast
                </span>
                <ul>
                    <li>
                        <Link to="/" className={item}>Home</Link>
                    </li>
                    <li>
                        <Link to="/Blog" className={item}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/Movies" className={item}>Movies</Link>
                    </li>
                    <li>
                        <Link to="/About" className={item}>About</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}