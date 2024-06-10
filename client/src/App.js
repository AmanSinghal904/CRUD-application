
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navibar from './components/Navibar.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Edit from './components/Edit.js';
import Detail from './components/Detail.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navibar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/view/:id' element={<Detail/>}/>
      </Routes>
      
      </BrowserRouter>  
    </>
  );
}

export default App;
