import React from "react";
import "../css/Hero.css"
export default function Hero(){
  return(
    <section className="hero">
      <img  src="./images/photo-grid.png" className="hero-logo"/>
      <h1 className="hero-header">
        Online Experiences
      </h1>
      <p className="hero-text"> 
        Join unique interactive activities by led by one-of-a-kind 
        host-all without leaving home.
      </p>
    </section>
  )
}