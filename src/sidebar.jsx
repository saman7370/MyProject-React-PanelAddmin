import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Sidebar = ()=>{
    return(
        <div className="main-sidebar">
            <ul className="ul-sidebar">
                <li className="first-li-sidebar">
                   <img src="./assets/images/IMG_20210517_162644_968.jpg"></img>
                </li>
                <Link to="/users"><li className="li">کاربران</li></Link>
                <Link to="/posts"><li className="li">پست ها</li></Link>
                <Link to="/gallerys"> <li className="li">گالری</li></Link>
                <Link to="/todos"><li className="li">کارها</li></Link>
                <li className="footer-li">
                    <img src="./assets/images/bold-letter-s-colorful-logo-vector_84302-331.jpg"/>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;