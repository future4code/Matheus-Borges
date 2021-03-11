import React from "react";

export const CardVideo = (props) => {
  // console.log("PROPS", props);

  return (
    <div className="media-box">
      <img src={props.imagem} alt={props.titulo} />
      <p className="title">{props.titulo}</p>
    </div>
  );
};
