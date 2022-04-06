import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import Gallery from "./gallery/gallery";
import Post from "./posts/post";
import Todo from "./todos/todo";
import User from "./users/user";


const Content = ()=>{
    return(
        <div className="main-content">
            <Routes>
                <Route path='/users' element={<User/>}/>
                <Route path='/posts' element={ <Post/>}/>
                <Route path='/gallerys' element={<Gallery/>}/>
                <Route path='/todos' element={ <Todo/>}/>
                <Route path='*' element={ <User/>}/>
            </Routes>
        </div>
      
       
        
       
           
    )
}

export default Content;