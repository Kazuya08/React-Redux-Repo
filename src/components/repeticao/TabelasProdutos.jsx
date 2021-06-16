import React from "react";

import "../repeticao/tabelasProdutos.css";
import Produtos from "../../data/produtos";

function TabelaProdutos(props) {
  console.log(Produtos);
  function getLinhas() {
    return Produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 == 0 ? "Par" : "Impar"}>
          <td key={produto.id}>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>R${produto.preco}</td>
        </tr>
      );
    });
  }

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preco</th>
          </tr>
        </thead>
        {getLinhas()}
      </table>
    </div>
  );
}

export default TabelaProdutos;
