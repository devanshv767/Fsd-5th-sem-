// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// import ICard from './components/ICard'
// import ICardGallery from './components/ICardGallery'


// function App() {


//   return (
    
//     // <div style = {{border:'2px solid black ' ,backgroundColor:'White', width : '600px' , height : '400px'}}>
//     //   <h2 style = {{color : 'black'}}>ABES ENGINEERING COLLEGE</h2>
//     //   <h3 style = {{color : 'red'}}>Roll No. - 240032023038</h3>
//     //   <h3 style = {{color : 'red'}}>Name - Devansh Verma</h3>
//     //   <h3 style = {{color : 'red'}}>Branch - CSE</h3>
//     //   <h3 style = {{color : 'red'}}>Section - 24</h3>
//     //   <h3 style = {{color : 'red'}}></h3>
//     //   <ICard/>
//     //   </div>

//     <div style = {{border : '2px solid cyan' , backgroundColor :"black" , height : '600px', wifth : '600px'}}>
//       <ICardGallery/>
//     </div>
//   )
// }

// export default App

// import { useState } from 'react'
// import './App.css'

// function App() {
  
//   const [name, setName] = useState('John Doe')
//   const [college, setCollege] = useState('ABC Institute of Technology')

  
//   const handleUpdateDetails = () => {
    
//     setName('Devansh Verma') 
//     setCollege('ABES Engineering College') 
//   }

//   return (
//     <div className="app-container">
//       <h1>Student Details</h1>
      
//       <div className="details-card">
//         <p><strong>Name:</strong> {name}</p>
//         <p><strong>College:</strong> {college}</p>
//       </div>

//       {/* 3. Button to trigger the state update */}
//       <button onClick={handleUpdateDetails}>
//         Update to Original Details
//       </button>
//     </div>
//   )
// }

// export default App


// import { useState } from 'react';
// import ImageManipulation from './components/ImageManipulation';

// function App() {
// return (
//     <div>
//     <div>

//         <ImageManipulation />
        
//       </div>

//     </div>
//   );
// }

// export default App;


// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// import ICard from './components/ICard'
// import ICardGallery from './components/ICardGallery'

// function App() {

//   return (
//     <div style={{border:'2px solid blue',width:'600px', height:'500px',backgroundColor:'black'}}>
//       <ICardGallery />
//     </div>

//   )
// }

// export defau// import ImageManipulation from './components/ImageManipulation';
// import MyUseEffect from './components/MyUseEffect';

// function App() {
// return (
//     <div>
//     <div>

//         <MyUseEffect/>
        
//       </div>

//     </div>
//   );
// }

// export default App;


import FetchProducts from './components/FetchProducts';
import login from './components/login';
import Dashboard from './components/Dashboard';
import Registration from './components/Registration';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = '/login' element={<login/>}></Route>
        <Route path = '/register' element={<Registration/>}></Route>
        <Route path = '/dashboard' element={<Dashboard/>}></Route>
        <Route path = '/' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;