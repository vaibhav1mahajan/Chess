'use client'
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Button } from "../ui/button"
import axios from 'axios'


const Auth = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="p-5 bg-gray-200">
            <h2 className="text-3xl font-bold text-center">Login</h2>
            <div className="mt-5 px-2 py-5">
                
            <p className="text-xl m-1 ">Username</p>
            <Input  className="bg-gray-300" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value) }/>
            </div>
            <div className=" px-2 py-2">
                
            <p className="text-xl m-1 ">Password</p>
            <Input  className="bg-gray-300" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value) }/>
            </div>
            <Button onClick={()=>{
              axios.post('http://localhost:3030/api/auth/signin', { username, password },{
                withCredentials:true,
                headers: {
                  'Content-Type': 'application/json',
                },
              }
              ).then(async (response) => {
                const data = response.data;
                console.log(data);
              })
              .catch(async (error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
              });
              
            }} className="mx-2 mt-2">Submit</Button>
        </div>
    </div>
  )
}

export default Auth
