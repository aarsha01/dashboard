import React, { useEffect, useState } from 'react'
import callApi from '../helper/callApi';


function Marquee() {

    const [data, setData] = useState([]);
    useEffect(() => {
      fetchMarquee();
    }, []);



    const fetchMarquee = async () => {
        const response = await callApi('marquee/fetch');
        console.log(response);
        setData(response.data)

      };





  return (
    <div >
             <br></br>
             <marquee style={{ color: 'red', fontSize: '3em' }}>
             {data.map((item,key)=>(<p key={key}>Test</p>))} 
             </marquee>
             
             <br></br>

           </div> 
    
  )
}

export default Marquee