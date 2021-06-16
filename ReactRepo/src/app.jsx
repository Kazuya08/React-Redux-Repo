import "./styles/App.css";
import React from "react";

import Familia from "./components/Familia";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelasProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/FamiliaMembro";
import Card from "./components/layout/Card";
import Componente from "./components/componente";
import ComParametro from "./components/comParametro";
import Fragmento from "./components/Fragmento";
import Aleatorio from "./components/aleatorio";

const app = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#8 - Renderização Condicional" color="#273746">
          <ParOuImpar numero={21}></ParOuImpar>
          <UsuarioInfo />
          {/* <UsuarioInfo usuario={{nome: "Thiago"}}></UsuarioInfo> */}
        </Card>

        <Card titulo="#7 - Repetição de produtos" color="#00bfff">
          <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#6 - Repetição" color="#b34d4d">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#5 - Componente Filhos" color="#40E0D0">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Rodrigo" />
            <FamiliaMembro nome="Bruno " />
            <FamiliaMembro nome="Debora" />
          </Familia>
        </Card>

        <Card titulo="#4 - Desafio Aleatorio" color="#080">
          <Aleatorio min={1} max={60}></Aleatorio>
        </Card>

        <Card titulo="#3 - Fragmento">
          <Fragmento />
        </Card>

        <Card titulo="#2 - Componente">
          <Componente />
        </Card>

        <Card titulo="#1 - Com Parâmetro">
          <ComParametro
            titulo="Contemplato"
            conscorcios="Bradesco"
            credit={20000}
          />
        </Card>
      </div>
    </div>
  );
};

export default app;
