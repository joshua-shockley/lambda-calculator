import React, {useState} from "react";

//import any components needed
import numbers from "../../../data";
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file
console.log(numbers);
const Numbers = () => {
  // STEP 2 - add the imported data to state
  {/* const [number, setNumber] = useState(numbers); */}
// console.log(numbers);

  return (
    <div>
      {numbers.map(number => <NumberButton text={number}/>)}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component */}
    </div>
  );
};
export default Numbers;
