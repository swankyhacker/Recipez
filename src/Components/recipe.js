import React, { useState } from "react";
import '../App.css';


function Recipe(props) {

  return (
    <div className='recipe'>
      <h3> {props.label} </h3>
      <img className='recipe-image' src={props.image} alt='' />
      <p>
        <span className='bold'>Calories:</span> {props.calories} cal
        <br />
        <span className='bold'>Cooking Time:</span> {props.totalTime > 0 ? props.totalTime + ' min' : 'NA'}
        <br />
        <a href={props.url} target='_blank'>View Recipe</a>
      </p>
    </div>
  );
}

export default Recipe;
