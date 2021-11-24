import React from "react";
import {Slideshow, Slide, TextoSlide} from "./componentes/Slideshow";
import './estilos.css';
import styled from "styled-components";
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
function App() {
  return (
    <main>
      <Titulo>Produtos destacados</Titulo>
      <Slideshow controles={true}>
        <Slide>
            <a href="http://localhost:3000/">
                <img src={img1} alt="" />
            </a>
            <TextoSlide corFundo="#ffF000" corTexto="#000">
                <p>kkkkkkkkkkkkkkkkkkkkkkkkkkk</p>    
            </TextoSlide>
        </Slide>
        <Slide>
            <a href="http://localhost:3000/">
                <img src={img2} alt="" />
            </a>
            <TextoSlide>
                <p>kkkkkkkkkkkkkkkkkkkkkkkkkkk</p>    
            </TextoSlide>
        </Slide>
        <Slide>
            <a href="http://localhost:3000/">
                <img src={img3} alt="" />
            </a>
            <TextoSlide>
                <p>kkkkkkkkkkkkkkkkkkkkkkkkkkk</p>    
            </TextoSlide>
        </Slide>
        <Slide>
            <a href="http://localhost:3000/">
                <img src={img4} alt="" />
            </a>
            <TextoSlide>
                <p>kkkkkkkkkkkkkkkkkkkkkkkkkkk</p>    
            </TextoSlide>
        </Slide>
      </Slideshow>

      <Titulo>Produtos destacados</Titulo>
      <Slideshow controles={true} autplay={true} velocidade="3000" intervalo="500">
        <Slide>
            <a href="http://localhost:3000/">
                <img src={img1} alt="" />
            </a>
            <TextoSlide corFundo="#ffF000" corTexto="#000">
                <p>kkkkkkkkkkkkkkkkkkkkkkkkkkk</p>    
            </TextoSlide>
        </Slide>
        <Slide>
            <a href="http://localhost:3000/">
                <img src={img2} alt="" />
            </a>
            <TextoSlide>
                <p>kkkkkkkkkkkkkkkkkkkkkkkkkkk</p>    
            </TextoSlide>
        </Slide>
        <Slide>
            <a href="http://localhost:3000/">
                <img src={img3} alt="" />
            </a>
            <TextoSlide>
                <p>kkkkkkkkkkkkkkkkkkkkkkkkkkk</p>    
            </TextoSlide>
        </Slide>
        <Slide>
            <a href="http://localhost:3000/">
                <img src={img4} alt="" />
            </a>
            <TextoSlide>
                <p>kkkkkkkkkkkkkkkkkkkkkkkkkkk</p>    
            </TextoSlide>
        </Slide>
      </Slideshow>
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
