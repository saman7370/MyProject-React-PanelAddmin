import React from 'react';
import ReactDOM from 'react-dom';

const Sidebar = ()=>{
    return(
        <div className="main-sidebar">
            <ul className="ul-sidebar">
                <li className="first-li-sidebar">
                   <img src="./assets/images/IMG_20210517_162644_968.jpg"></img>
                </li>
                <li className="li">کاربران</li>
                <li className="li">پست ها</li>
                <li className="li">گالری</li>
                <li className="li">کارها</li>
                <li className="footer-li">
                    <img src="./assets/images/bold-letter-s-colorful-logo-vector_84302-331.jpg"/>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;