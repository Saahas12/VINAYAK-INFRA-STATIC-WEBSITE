import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home'
import Projects from "./routes/Projects";
// import ProjectOngoing from "./components/ProjectOngoing";
import ProjectComponent from "./components/ProjectComponent";
import ProjectOngoing from "./components/ProjectOngoing";
import { Rent } from "./routes/Rent";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/projectscom" element={<ProjectComponent/>}/>
      <Route path="/projectsong" element={<ProjectOngoing/>}/>
      <Route path="/rent" element={<Rent/>}/>
    </Routes>
    </>
  );
}

export default App;
