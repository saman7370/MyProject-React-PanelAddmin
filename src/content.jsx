import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from "./gallery/gallery";
import Post from "./posts/post";
import Todo from "./todos/todo";
import User from "./users/user";


const Content = ()=>{
    return(
        <div className="main-content">
           <User/>
           <Post/>
           <Gallery/>
           <Todo/>
        </div>
           
    )
}

export default Content;