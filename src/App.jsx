import './App.css'
import AllCourses from './All'
import { FsdCourse } from './FSD'
import { DsCourse } from './DS'
import { CyberCourse } from './Cyber'
import { Career } from './Career'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    // routers for all pages
   <div>
      <Routes>
     <Route exact path="/" element={<AllCourses/>}/>
    <Route path="/fsd" element={<FsdCourse/>}/>
    <Route path="/datascience" element={<DsCourse/>}/>
    <Route path="/Cybersecurity" element={<CyberCourse/>}/>
    <Route path="/Career" element={<Career/>}/>
      </Routes>

    </div>
  );
}

export default App
