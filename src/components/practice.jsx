import React from 'react'
import { useEffect ,useState} from 'react';

const Coin = () => {


    const [loding, setLoding] = useState(true)
    const [coin, setCoin] = useState([])
  
    useEffect(()=>{
      fetch('https://api.coinpaprika.com/v1/tickers',)
      .then((response) => response.json())
      .then((json)=> {
        setCoin(json)
        setLoding(false)
      })
    },[]);
  
    return (
      <div >
        <h1>The coins!</h1>
        {loding ? <strong>Loding</strong>: null}
        <ul>
         
        </ul>
      </div>
    );
}

export default Coin
