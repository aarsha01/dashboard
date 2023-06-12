import React, { useEffect, useState } from 'react'
import callApi from '../helper/callApi';
import Marquee from "react-fast-marquee";



function Marqueefn() {

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
            {
              <Marquee pauseOnHover={true} style={{ color: 'red' ,fontSize:15}} speed={60} >
                {data.map((item,key)=>(<p key={key} style={{marginRight:'50em'}}>{item.Description}</p>))}
              </Marquee>
             }
             
             <br></br>

           </div> 
    
  )
}

export default Marqueefn