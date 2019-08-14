import React, { useState } from "react";

const OperatorButton = (props) => {
    return ( 
        <div> { /* Display a button element rendering the data being passed down from the parent container on props */ } 
        <button className ="button opButtons"> 
        { /* className="button" onclick={() => props.Function(props.value)} */ }

        { props.text.char }

        </button>

        </div>
    );
};
export default OperatorButton;