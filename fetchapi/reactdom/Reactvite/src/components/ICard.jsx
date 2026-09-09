import React from 'react'

function ICard({data}) {
  return (
    <div style = {{border:'10px solid red' , height :"auto" , width :'250px'}}>
      <h2>College:{data.college}</h2>
      <h2>Roll:{data.roll}</h2>
      <h2>Name:{data.name}</h2>
      <h2>Branch:{data.branch}</h2>
      <img src = {data.pic} height ={200} width = {200}></img>
    </div>
  )
}

export default ICard
