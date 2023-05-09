import React from "react";
import { Link } from "react-router-dom";
import { moviesTitle, hvrBounceIn } from "../../css/moviesGrid.module.css";
import { item, navBarPc } from "../../css/Header/nav.module.css";

export function NavBarPc() {
    return (
        <>
            <nav className={navBarPc}>
                <ul>
                    <li>
                        <Link to="/" className={item}>
                            <span className={moviesTitle + " " + hvrBounceIn} >
                                OmeCast
                            </span>
                        </Link>
                    </li>
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