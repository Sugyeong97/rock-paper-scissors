import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src="https://cdn-icons.flaticon.com/png/512/2041/premium/2041965.png?token=exp=1650509360~hmac=9e4e477cb66a2d86fb75c21dd5777eeb"
      />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
