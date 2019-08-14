import React, {useState} from "react";

//import any components needed
import {specials} from "../../../data.js";
import SpecialButton from "./SpecialButton.js";
//Import your array data to from the provided data file
console.log(specials);
const Specials = (props) => {
  // STEP 2 - add the imported data to state
  // const [special, setSpecial] = useState(specials);

  return (
    <div className="topLeft">
     {specials.map(special => <SpecialButton key={special} text={special}/>)}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {/* <SpecialButton/> */}


    </div>
  );
};

export default Specials;
