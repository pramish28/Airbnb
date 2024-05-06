import React from "react";
import "../css/Card.css"
export default function Card(){
  return(
      <div className="card">
          <img src="../images/katie-zaferes.png"
           className="card--image" 
           alt="Main Card Image."
          />
          <div className="card--stats">
              <img src="../images/star.png" className="card--star"
              alt="Star Icon"/>
              <span>5.0</span>
              <span className="gray">(6) • </span>
              <span className="gray">USA</span>
          </div>
          <h2>Life Lessons with Katie Zaferes</h2>
          <p>From $136 / person</p>
      </div>
  )
}