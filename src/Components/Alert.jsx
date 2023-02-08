import React from 'react'

export default function Alert(props) {

  return (
   
  
    props.alert && <div className="alert alert-dark px-5" role="alert">
      {props.alert}
    </div>
  


  )
}
