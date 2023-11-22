import React,{useState,useEffect} from "react"
import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { Routes, Route, Link } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect
// } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/aboutus/About';
import Login from './pages/auth/login/Login';
 import OtpVerify from './pages/auth/verifyOtp/OtpVerify';
 import { PrivateRoute } from "./components/widgets/privateRoute";
function App() {
  // const user = localStorage.getItem("user");

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already logged in (stored in localStorage)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

 console.log("user is", user)
  return (
    <>
        {/* <Routes>
          <Route exact path="/" element={  <PrivateRoute>  <About /> </PrivateRoute> } />
          <Route exact path="/about" element={ <About /> } />
           <Route exact path="/login" element={ <Login />} />
          <Route exact path="/verify-otp" element={  <OtpVerify /> } />
        </Routes> */}
   
        <Router>
      {/* Your other components */}
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route exact path="/about" element={  <PrivateRoute>  <About /></PrivateRoute> } />
        <Route path="/" element={ <PrivateRoute> <Home /> </PrivateRoute> } />
        <Route exact path="/verify-otp" element={ <OtpVerify />  } />
         <Route path="*" element={<Login />} />
        {/* Other routes */}
      </Routes>
    </Router>
{/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/about" element={  <PrivateRoute>  <About /></PrivateRoute> } />
        <Route path="/" element={ <PrivateRoute> <Home /> </PrivateRoute> } />
        <Route exact path="/verify-otp" element={ <OtpVerify />  } />
         <Route path="*" element={<Login />} />
      </Routes> */}

{/* <Routes>
      <Switch>
        <Route exact path="/">
        { <PrivateRoute> <Home /> </PrivateRoute> }
        </Route>
        </Switch>
        </Routes> */}
        
    </>
  );
}

export default App;
