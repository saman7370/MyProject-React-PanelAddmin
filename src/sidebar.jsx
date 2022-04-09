import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import { MainContext } from './contexts/mainContext';

const Sidebar = ()=>{
    const{showMenu , setShowMenu} = useContext(MainContext);

    return(
        <div className="main-sidebar" style={showMenu ? {right:0} : {}}>
            <ul className="ul-sidebar">
                <li className="first-li-sidebar">
                   <img src="./assets/images/IMG_20210517_162644_968.jpg"></img>
                </li>
                <NavLink to="/users" className={({isActive})=>{return isActive ? "active-li" : ""}}><li className="li active-li">کاربران</li></NavLink>
                <NavLink to="/posts" className={({isActive})=>{return isActive ? "active-li" : ""}}><li className="li">پست ها</li></NavLink>
                <NavLink to="/gallerys" className={({isActive})=>{return isActive ? "active-li" : ""}}> <li className="li">گالری</li></NavLink>
                <NavLink to="/todos" className={({isActive})=>{return isActive ? "active-li" : ""}}><li className="li">کارها</li></NavLink>
                <li className="footer-li">
                    <img src="./assets/images/bold-letter-s-colorful-logo-vector_84302-331.jpg"/>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;