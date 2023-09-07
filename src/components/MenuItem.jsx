import React from "react";

const MenuItem = (props) => {
  return (
    <div className="grid-items">
      <img src={props.img} height={250} />
      <div className="grid-items-body">
        <div className="flex">
          <h3>{props.title}</h3>
          <span>$ {props.price}</span>
        </div>
        <p>{props.description}</p>
        <a href="#">Order a delivery</a>
      </div>
    </div>
  );
};

export default MenuItem;
