import { createContext, useEffect, useState } from "react";


export let Usercontext= createContext()

export default function UserContextProvider({children}){


   async function emailll(email){
        let x= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{email}
        )
        console.log(x);
        
    }



    const [userData, setUserData] = useState(null)
    useEffect(()=>{
        if(localStorage.getItem('userToken')){
            setUserData(localStorage.getItem('userToken'))
        }
    },[])
    return <Usercontext.Provider value={{userData,setUserData,emailll}}>
        {children}
    </Usercontext.Provider>

}