import React, {useState} from "react";

//import any components needed
import {operators} from "../../../data.js";
import OperatorButton from "./OperatorButton.js";
//Import your array data to from the provided data file
console.log(operators);
const Operators = (props) => {
  // STEP 2 - add the imported data to state
// const [buttonOperator, setOperator] = useState(operators);

  return (
    <div className="opButtons_container">
{operators.map(operator => <OperatorButton className="opButtons" key={operator} text={operator}/>)}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    {/* <OperatorButton/> */}
    </div>
  );
};

export default Operators;
