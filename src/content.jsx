import React from 'react';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainContext } from './contexts/mainContext';
import Gallery from "./gallery/gallery";
import Post from "./posts/post";
import Todo from "./todos/todo";
import Adduser from './users/adduser';
import User from "./users/user";


const Content = ()=>{

    const{showMenu , setShowMenu} = useContext(MainContext);

    const handleShowMenu = (event)=>{
        event.stopPropagation();
        setShowMenu(!showMenu);
    }

    return(
        <div className="main-content" onClick={()=> {setShowMenu(false)}}>
            <i className=" icon-bar fas fa-bars text-dark m-2 pointer" onClick={handleShowMenu}></i>
            <Routes>
                <Route path='/users' element={<User/>}/>
                <Route path='/users/add' element={<Adduser/>}>
                    <Route path=':Userid'/>
                </Route>
                <Route path='/posts' element={ <Post/>}/>
                <Route path='/gallerys' element={<Gallery/>}/>
                <Route path='/todos' element={ <Todo/>}/>
                <Route path='*' element={ <User/>}/>
            </Routes>
        </div>      
    )
}

export default Content;