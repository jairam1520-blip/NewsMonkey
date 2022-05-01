import "./App.css";

import NavBar from "./Components/NavBar";
import News from "./Components/News";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";

 const  App=()=>{
  
  let pageSize=6;
  let apiKey=process.env.REACT_APP_NEWSMONKEY_API_KEY
  
  const [progress, setProgress] = useState(0);

    return (
     
      <BrowserRouter>
      <NavBar />
      <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
      <Routes>
        
        <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} category="general"/>}></Route>
        <Route path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health"  pageSize={pageSize} category="health"/>}></Route>
        <Route  path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} category="science"/>}></Route>
        <Route path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} category="sports"/>}></Route>
        <Route path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} category="technology"/>}></Route>
        <Route  path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} category="general"/>}></Route>
        <Route  path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment"/>}></Route>
        <Route  path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} category="business"/>}></Route>
        
      </Routes>
    </BrowserRouter>
    );
}
export default App;