import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import './Styles/Categories.css'
export default function Popup1() {
  return (
    <div>
      <Popup
        trigger={<button> Click to open popup </button>}
        position="right center"
       
      >
        
      </Popup>
    </div>
  );
}
