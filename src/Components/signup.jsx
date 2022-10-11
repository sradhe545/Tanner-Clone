

import { Box,Button,FormControl,Input,Text
    } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Context } from '../Context/ContextProvider'


export default function Signup(){
    
  const {handleSignUp}=useContext(Context)
  const [form,setForm]=useState({fname:"",lname:"",email:"",password:""})
  const handleChange=(e)=>{
    const {name,value}=e.target
    setForm({...form,[name]:value})
  }
  function onSubmit(event){
    event.preventDefault()
    handleSignUp(form)
  }
    return(
  <>
  <Box w='450px' m='auto' mb='150px' mt='50' textAlign='center' >      
  <Text fontSize='40'>Create account</Text>
  <form onSubmit={onSubmit}>
      <FormControl isRequired>
      <Input mt='5' placeholder='First name'  autoComplete='on' name="fname" value={form.fname} onChange={handleChange}/>
      </FormControl>
      <FormControl isRequired>
      <Input mt='5' placeholder='Last name' autoComplete='on'name="lname" value={form.lname} onChange={handleChange}/>
      </FormControl>
      <FormControl>
      <Input mt='5' type='email' placeholder='Email address' name="email" autoComplete='on' value={form.email} onChange={handleChange}/>
      </FormControl>
      <FormControl>
      <Input mt='5' type='password' placeholder='Password'name="password" autoComplete='on' value={form.password} onChange={handleChange}/>
      </FormControl>
      <Button mt='10'pl='70' pr='70' pt='6' pb='6'  fontSize='large' backgroundColor='#475D4B' colorScheme='white' type="submit">Create</Button>
      </form>
  </Box>
</>
    )
}