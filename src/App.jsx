import { useState, useEffect } from "react";
import {useDispatch} from 'react-redux';
import  authService  from "./Appwrite/auth";
import { login, logout } from "./store/authSlice";
import {Navbar,Footer} from './Components/Index'
import { Outlet } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); 
  useEffect(()=>{
   authService.getCurrentUser()
   .then((userData)=>{
    if (userData) {
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    } 
   })
   .finally(()=>(
       setLoading(false)
   ));
  },[])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Navbar />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null

};

export default App;
