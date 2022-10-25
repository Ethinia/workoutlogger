import Times from './Times.js'

import React from 'react'

function Time(props) {
 
 return (
 <div>
  {props.showTime ? <Times date={props.date}/> : null}
 </div>
  )

  //console.log(date);
}

export default Time;