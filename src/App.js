import './App.scss';
import { Routes,Route } from 'react-router-dom';
import 'loaders.css/loaders.min.css';
import Layout from './components/Layout'
import Home from './components/Home'
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element= {<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path = "education" element={<Education/>}></Route>
        <Route path = "experience" element={<Experience/>}></Route>
        <Route path = "projects" element={<Projects/>}></Route>
        <Route path = "contact" element={<Contact/>}></Route>
      </Route>
      
    </Routes>
    </>
  );
}

export default App;
