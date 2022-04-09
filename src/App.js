import Content from './content';
import Sidebar from './sidebar';
import {BrowserRouter} from 'react-router-dom';
import { useState } from 'react';
import { MainContext } from './contexts/mainContext';



const App = ()=>{

     const[showMenu , setShowMenu] = useState(false);

    return(
        <BrowserRouter>
           <MainContext.Provider value={{showMenu , setShowMenu}}>
              <Sidebar/>
              <Content/>
           </MainContext.Provider>
        </BrowserRouter>
    )
}

export default App;