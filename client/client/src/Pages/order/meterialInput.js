import React , { useEffect, useState} from 'react';
import "./meterial.css";

const MaterialInput = (props) => {
  
    
    const [focus, setFocus] = useState(props.value === "" ? false : true);
    const [touch, setTouch] = useState(false);
    return (
      <div className="materialInput">
        <label
          className={`label ${focus ? "focus" : ""}`}
          style={{
            top: 0,
            lineHeight: "none",
          }}
         >
          {props.label && `Enter ${props.label}`}
        </label>
        <div
          style={{
            display: "flex",
          }}
        >
          <input
            className="input"
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            onFocus={(e) => {
              setFocus(true);
              setTouch(true);
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                setFocus(false);
              } else {
                setTouch(false);
              }
            }}
          />
          {props.rightElement ? props.rightElement : null}
        </div>
        {touch && (
          <div
            style={{
              fontSize: "10px",
              color: "red",
              fontWeight: 500,
            }}
          >{`${props.label} is Required`}</div>
        )}
      </div>
    );
  };
  /// meterial button
  const MaterialButton = (props) => {
    
     useEffect(() =>{
      
      

     })
    return (
      <div
        style={{
          width: "100%",
          ...props.style,
        }}
      >
        <button
          className="materialButton"
          style={{
            backgroundColor: props.bgColor,
            color: props.textColor,
            fontSize: props.fontSize,
          }}
        >
          {props.icon && props.icon}
          {props.title && props.title}
        </button>
      </div>
    );
  };
  ///  order comfirm button
 
  export  { MaterialInput , MaterialButton};
  