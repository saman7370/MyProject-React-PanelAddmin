import React from 'react';
import Content from './content';
import Sidebar from './sidebar';
import {BrowserRouter} from 'react-router-dom';


const App = ()=>{
    return(
        <BrowserRouter>
           <Sidebar/>
           <Content/>
        </BrowserRouter>
    )
}

export default App;