import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'


function App() {


  return (
    
    // <div style = {{border:'2px solid black ' ,backgroundColor:'White', width : '600px' , height : '400px'}}>
    //   <h2 style = {{color : 'black'}}>ABES ENGINEERING COLLEGE</h2>
    //   <h3 style = {{color : 'red'}}>Roll No. - 240032023038</h3>
    //   <h3 style = {{color : 'red'}}>Name - Devansh Verma</h3>
    //   <h3 style = {{color : 'red'}}>Branch - CSE</h3>
    //   <h3 style = {{color : 'red'}}>Section - 24</h3>
    //   <h3 style = {{color : 'red'}}></h3>
    //   <ICard/>
    //   </div>

    <div style = {{border : '2px solid cyan' , backgroundColor :"black" , height : '600px', wifth : '600px'}}>
      <ICardGallery/>
    </div>
  )
}

export default App
