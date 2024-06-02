import './NavBar.css';
import Menu from '../Menu/Menu';
import { useRef, useState, useEffect } from 'react';
function NavBar(){
    const[showMenu, setShowMenu] = useState(false);
    useEffect(() => {
        document.querySelector(".menu").addEventListener("click", () => {
            // const menuPopup = document.querySelector(".Menu-popup");
            setShowMenu(true);
        });
    },[]);

    useEffect(() => {
        if(showMenu){
            if(document.querySelector(".cut")){
                document.querySelector(".cut").addEventListener("click", () => {
                    const menuTable = document.querySelector(".menu-table");
                    const menuPopup = document.querySelector(".Menu-popup");
                    menuTable.classList.add("hidden");
                    menuPopup.classList.add("hidden");
                    setTimeout(() => {
                        document.querySelector(".Screen").style.display = "none";
                        setShowMenu(false);
                    }, 400);
                });
            }
            let redirect = document.querySelectorAll(".menu-btn");
            redirect.forEach((btn) => {
                btn.addEventListener("click", () => {
                    const menuTable = document.querySelector(".menu-table");
                    const page = btn.querySelector("h2").textContent;
                    const menuPopup = document.querySelector(".Menu-popup");
                    menuTable.classList.add("hidden");
                    menuPopup.classList.add("hidden");
                    setTimeout(() => {
                        document.querySelector(".Screen").style.display = "none";
                        setShowMenu(false);
                    }, 400);
                    if(document.getElementById(page)){
                        document.getElementById(page).scrollIntoView({ behavior: "smooth" });
                    }
                });
            });
        }
    },[showMenu]);
    return(
        <div className="navBar">
            {showMenu && <Menu />}
            <div class="left">
                <h1>Harsh Verma</h1>
            </div>
            <div class="right menu">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="jss61" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path></svg>
            </div>
        </div>
    )
}
export default NavBar;