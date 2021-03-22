import React from "react";
import "./styles.css";

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="./">Google Books</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">

                    <li class="nav-item">
                        <a class="nav-link" href="./Search">Search</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./saved">Saved</a>
                    </li>

                </ul>
            </div>
        </nav>);
}


export default Header;