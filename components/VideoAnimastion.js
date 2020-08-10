import React,{useEffect,useState} from "react"






export default function Home({scrollPosition}) {

console.log(scrollPosition)

  



  return (
    <div className={`${scrollPosition>99?'ct-3':'ct-4'}`}>
        
  
        <img className="laptop-height100"  src={`/large_00${scrollPosition}.jpg`}></img>
      

    </div>
  )
}