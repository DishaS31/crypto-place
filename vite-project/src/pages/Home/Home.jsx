import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/coincontext'

function Home() {

  const{allCoin,currency}= useContext(CoinContext);
  const[displayCoin,setDisplayCoin]= useState([]);

  useEffect(()=>{
    setDisplayCoin(allCoin);
  },[allCoin])

  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br/>crypto marketplace</h1>
        <p>welcome to the world's largest crypptocurrency
          marketplace. sing up to more explore more about
          crypto.
        </p>
        <form>
          <input type="text" placeholder='search crypto..' />
          <button type='submit'>search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>coins</p>
          <p>price</p>
          <p style={{textAlign:"center"}}>24H change</p>
          <p className='market-cap'>market cap</p>
        </div>

        {
          displayCoin.slice(0,10).map((item,index)=>(
            <div className="table-layout"key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name +  "-" + item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h>0? "green": "red"}>
                {Math.floor(item.price_change_percentage_24h*100)/100}
              </p>
              <p className='market-cap'> {currency.symbol}{item.market_cap.toLocaleString()}</p>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Home
