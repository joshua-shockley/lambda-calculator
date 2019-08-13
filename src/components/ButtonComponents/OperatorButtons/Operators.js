import React, {useState} from "react";

//import any components needed
import {operators} from "../../../src/data";
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file
console.log(operators);
const Operators = () => {
  // STEP 2 - add the imported data to state
// const [operator, setOperator] = useState(operators);

  return (
    <div>

{operators.map(operator => <OperatorButton text={operator}/>)}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;
