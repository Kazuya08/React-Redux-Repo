import React from "react";

function aleatorio(props) {
  const { min, max } = props;

  const naleatorio = parseInt(Math.random() * (max - min));

  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p>
        <strong>Valor Mínimo</strong>
        {min}
      </p>
      <p>
        <strong>Valor Maximo</strong>
        {max}
      </p>
      <p>
        <strong>Valor aleatorio</strong>
        {naleatorio}
      </p>
    </div>
  );
}

export default aleatorio;
