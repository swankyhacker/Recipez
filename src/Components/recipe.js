import React from "react";

function Recipe(props) {
  return (
    <div className='recipe'>
      <h1> {props.label} </h1>
      <img src={props.image} alt='' />
      <p> {props.calories} </p>
    </div>
  );
}

export default Recipe;
