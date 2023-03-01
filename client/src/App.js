import React from 'react';
import { Navigate } from'react-router-dom';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import { Profile } from './components/Profile';

function App() {
  return (
    <div align="centre">
    <NoteState>
    <BrowserRouter>
  
    <Navbar></Navbar>
    <Routes>
      <Route path = "/" element={ <ProtectedRoute> <Home/></ProtectedRoute>}>
      </Route>
      <Route path = "/login" element={ <Login/> }>
      </Route>
      <Route path = "/signup" element={<Signup/>}/>
      <Route exact path = "/about" element={ <ProtectedRoute> <About/> </ProtectedRoute>
}/>
      <Route exact path = "/profile" element={
      
      <ProtectedRoute> <Profile/></ProtectedRoute>}/>

    
    </Routes>   
     
    </BrowserRouter>
    </NoteState> 
    
    </div>
  );
}

export default App;


export function ProtectedRoute({children}) {

  if (sessionStorage.getItem('auth')) {
    return children
  } else {
    return <Navigate to="/login"></Navigate>
  }
}