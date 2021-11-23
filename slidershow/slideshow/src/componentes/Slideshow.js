import React from "react";
import { ReactComponent as FlechaEsquerda } from "./../img/iconmonstr-angel-left-thin.svg";
import { ReactComponent as FlechaDireita } from "./../img/iconmonstr-angel-right-thin.svg";
import img1 from './../img/1.jpg';
import img2 from './../img/2.jpg';
import img3 from './../img/3.jpg';
import img4 from './../img/4.jpg';
import styled from "styled-components";

const seguinte = () => {
    console.log('Seguinte');
}

const anterior = () => {
    console.log('Anterior');
}


const Slideshow = () => {
    return (
        <ContainerPrincipal>
            <ContainerSlidershow>
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
            </ContainerSlidershow>
            <Controles>
                <Botao onClick={anterior}><FlechaEsquerda /></Botao>
                <Botao direito onClick={seguinte}><FlechaDireita /></Botao>
            </Controles>
        </ContainerPrincipal>
    );
}

const ContainerPrincipal = styled.div`
    position: relative;
`;

const ContainerSlidershow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
   /* max-height: 500px;*/
   position: relative;

   img {
       width: 100%;
       vertical-align: top;
   }
`;

const TextoSlide = styled.div`
    background: ${props => props.corFundo ? props.corFundo : 'rgba(0, 0, 0, .5)'};
    color: ${props => props.corTexto ? props.corTexto : '#fff'};
    width: 100%;
    padding: 10px 60px;
    text-align: center;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 700px) {
        position: relative;
        background: #000;
    }

`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index:20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Botao = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: all.3s ease all;

    &:hover {
        background: rgba(0, 0, 0, .2);
        path {
            fill: #fff;
        }
    }
    
    path {
        filter: ${props => props.direito ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
    }

    ${props => props.direito ? 'right: 0' : 'left: 0'}
`;

export default Slideshow;