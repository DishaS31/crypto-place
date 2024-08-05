import { createContext, useEffect, useState } from "react";

 export const CoinContext= createContext();

 const CoinContextProvider= (props)=>{
    const [allCoin,setallCoin]= useState([])
    const [currency,setcurrency]= useState({
        name:"usd",
        symbol:"$"
    })

    const fetchAllCoin= async ()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': '	CG-VkaCaXQWErBt1xMnZ9Ct8jo8'
            }
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setallCoin(response))
            .catch(err => console.error(err));
    }
  
    useEffect(()=>{
        fetchAllCoin ();
    },[currency])

    const contextvalue={

        allCoin,currency,setcurrency
    }

    return(
        <CoinContext.Provider value={contextvalue}>
            {props.children}
        </CoinContext.Provider>
    )
 }


 export default CoinContextProvider;