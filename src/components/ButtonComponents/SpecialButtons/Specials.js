import React, {useState, useEffect} from "react";

//import any components needed
import {specials} from "../../../src/data";
//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [special, setSpecial] = useState(specials);
console.log(specials);
  return (
    <div>
     {specials.map(special => <SpecialButton text={special}/>)}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       


    </div>
  );
};

export default Specials;
