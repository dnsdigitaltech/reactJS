import React from "react";
import Slideshow from "./componentes/Slideshow";
import './estilos.css';
import styled from "styled-components";

function App() {
  return (
    <main>
      <Titulo>Produtos destacados</Titulo>
      <Slideshow/>
    </main>
  );
}

const Titulo = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export default App;
