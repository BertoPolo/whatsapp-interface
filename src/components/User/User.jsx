import React from "react";
import { useState } from "react";
import "./User.css";

function User(props) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="list-main" onClick={() => setIsClicked(false)}>
        <div className="col-2">
          <img
            className="User-img"
            src={require("../../Data/whatsapp-logo.png")}
            alt="placeholder"
          ></img>
        </div>
        <div className="coluser-border col-10">
          <div className="User-data1">
            <h5> {props.name} </h5>
            <p>8:50 pm</p>
          </div>
          <div className="User-data2">
            <p>{props.lastMessage}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
