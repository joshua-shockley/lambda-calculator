import React, {useState} from "react";

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button specialButtons">
    {/* className="button" onclick={() => props.Function(props.value)} */}

    {props.text}

    </button>

    </>
  );
};

export default SpecialButton;
