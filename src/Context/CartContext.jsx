import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export let CartContext = createContext()

export default function CartContextProvider({children}) {

    let headers ={token:localStorage.getItem('userToken')}
    let [cardId, setcardId] = useState(null)
    const [totalPrice, setTotalPrice] = useState(0)
async function addProductCart(productId) {
   
       return await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId},{headers}
       ).then((response)=>{
        setcardId(response.data.data._id,"d")
        console.log(response.data.message);
        setTotalPrice(response.data.data.totalCartPrice)
        toast.success(response.data.message)
        
        return response
        
       }).catch((error)=>{
        console.log(error)
        toast.error(response.data.message)
        return error;
        
       })

}

async function ProductView() {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers}).then((response)=>{
        console.log(response)
        setcardId(response.data.data._id,"d")

        setTotalPrice(response.data.data.totalCartPrice)
        
        return response;
    }).catch((error)=>{
        console.log(error);
        return error
          
    })
}

async function deleteProduct(productId) {
    return await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers}).then((response)=>{
        console.log(response)
        setTotalPrice(response.data.data.totalCartPrice)

        return response;
    }).catch((error)=>{
        console.log(error);
        
        return error
        
    })
    
}
async function updateCart(productId,count) {
    
    return await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count},{headers}).then((response)=>{
        setTotalPrice(response.data.data.totalCartPrice)
        setcardId(response.data.data._id,"d")

        console.log(response)
        return response;
    }).catch((error)=>{
        console.log(error);
        return error
        
    })
    
}

async function checkOut(shippingAddress) {

     
    
    return  await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=http://localhost:5173`,{shippingAddress},{headers}).then((response)=>{
        console.log(response.data.session.url)
        window.location.href=response.data.session.url

        return response;
    }).catch((error)=>{
        console.log(error);
        
        return error
        
    })
}



























    return <CartContext.Provider value={{addProductCart,totalPrice,updateCart,ProductView,deleteProduct,checkOut}}>
        {children}
        </CartContext.Provider>
    
}