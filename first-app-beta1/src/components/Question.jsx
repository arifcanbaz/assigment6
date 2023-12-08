import React, { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";

const Card = ({questions}) => {
const [Btnclick, setBtnclick]=useState(false)
const handleButon =()=>{
  setBtnclick(!Btnclick)
}
  return (
    <div className="card-group">
      
        <div className="card" key={questions.id} >
              <div className="ques-answer">
            <h5>
              {questions.question}
            </h5>
            <button className="btn-minus " onClick={handleButon}>
              {Btnclick ? arrowdown : arrowup}
            </button>
          </div>
          {Btnclick ?<p> {questions.answer}</p>:""}
        </div>
       
    </div>
  );
};
export default Card;