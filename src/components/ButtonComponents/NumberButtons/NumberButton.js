import React, {useState} from "react";

const NumberButton = (props) => {
  

  return (
    <>   
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button>
    className="button" onclick={() => props.Function(props.value)}

    {props.buttonValue}

    </button>
    </>
  );
};
export default NumberButton;