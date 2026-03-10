import React, { useEffect, useState } from 'react'
import Close from './Close'

const Headline = () => {
  
  const [status, setStatus] = useState("");

  const updateStatus=()=>{
    setStatus("hide");
  };

  return (
    <div className={`headline ${status}`}>
        <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.<a href='/'>Learn More</a></p>
        <span onClick={updateStatus}><Close/></span>
    </div>
  )
}

export default Headline