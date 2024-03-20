import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function ProtectedLayout ({children ,authtication = true}){
  const [loader,setLoader] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state)=> state.auth.status);
  useEffect(()=>{
    if (authtication && authStatus !== authtication) {
      navigate('/login')
    }else if (!authtication && authStatus !== authtication) {
       navigate('/')
    }
    setLoader(false)
  },[authtication,authStatus,navigate])  
  return loader ? <h1>Loading...</h1> : <>{children}</>
}

