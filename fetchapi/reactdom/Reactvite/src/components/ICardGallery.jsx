import React from 'react'
import ICard from './ICard'

function ICardGallery() {
    const student = [
        {college :"ABES ENGINEERING COLLEGE", roll : "0038", name : "Devansh" ,branch : "Cse", pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKy8Og8U_xuw-peVJSbz23FwJG3QvCnM8rA68usmE_q3Qni-TvDn_GM7m55C1vy2uPf6uPn_TuO-qCzDUBSI_TAbJmMCbgWfDWxpwx98di&s=10"},
        {college :"ABES ENGINEERING COLLEGE", roll : "0038", name : "Devansh" ,branch : "Cse", pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaAzCnkkSUMkYPdLmE3hKZ6Fnz6lar2Vf7CSQ9juhPQ&s=10"}
    ];
  return (
    <div>
       
        {/* <ICard college = "ABES ENGINEERING COLLEGE" roll = "0038" name = "Devansh" branch = "Cse" pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKy8Og8U_xuw-peVJSbz23FwJG3QvCnM8rA68usmE_q3Qni-TvDn_GM7m55C1vy2uPf6uPn_TuO-qCzDUBSI_TAbJmMCbgWfDWxpwx98di&s=10"/> */}

        {/* <ICard data = {student[1]}/> */}

        {
            student.map((ele)=>(
                <ICard data = {ele}/>
            ))
        }
    </div>
  )
}

export default ICardGallery
