import React from "react";

function ComParametro(props) {
  console.log(props);
  const status = props.credit >= 20000 ? "bom" : "Ruim";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong>{props.conscorcios}</strong> <br />
        credit é {props.credit}o preco é <strong>{status}</strong>
      </p>
    </div>
  );
}

export default ComParametro;
