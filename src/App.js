import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reg from './components/Reg';
import SigninForm from './components/SigninForm'

function App() {
  return (
    <div>
   
   <BrowserRouter>
           <Routes>
           <Route path="/" element= {<Reg/>} ></Route>
           <Route path="/signinForm" element= {<SigninForm/>} ></Route>
           {/* <Route path="/" element= {<Registration/>} ></Route>
         */}
           </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
