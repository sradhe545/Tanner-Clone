import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import axios from "axios"
import { Navigate, useNavigate } from 'react-router-dom';
export const Context=createContext()

const ContextProvider = ({children}) => {

    const [data, setData] = useState([]);
    const [cart,setCart] = useState([]);
    const [sign,setSign] = useState([]);
    const navigate=useNavigate()
  



 

     const handleSignUp=(el)=>{
       const users=sign.find((elem)=>
         el.email===elem.email
       )
       
       if(users!==undefined)
       {
          alert("Already Exists!!")
       }
       else{
        axios.post("https://warm-sea-77698.herokuapp.com/trends",el).then((res)=>getSignUpData());
        navigate("/login")
       }
       
      // axios.post("https://warm-sea-77698.herokuapp.com/trends",el);
     }
     
     async  function getSignUpData(){        
      const res=  await axios.get("https://warm-sea-77698.herokuapp.com/trends")
      //  console.log(res.data)
      setSign(res.data)        
        }

        const handleLogin=(el)=>{
          const user=sign.find((elem)=>
          el.email===elem.email && el.password===elem.password
        )
        // console.log(user)
        if(user===undefined)
        {
           alert("Wrong Credentials!!")
        }
        else{
          
        // p=user
         navigate("/")
        

         }
        }
// console.log("user",p)
// const x=handleLogin()
// console.log("p",p)
useEffect(()=>{
  getSignUpData()
},[])
  return (
    <div>
<Context.Provider value={{handleSignUp,handleLogin}}>
    {children}
</Context.Provider>
    </div>
  )
}
export default ContextProvider