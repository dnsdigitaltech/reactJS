import React, {useRef, useEffect} from "react";
import { ReactComponent as FlechaEsquerda } from "./../img/iconmonstr-angel-left-thin.svg";
import { ReactComponent as FlechaDireita } from "./../img/iconmonstr-angel-right-thin.svg";
import img1 from './../img/1.jpg';
import img2 from './../img/2.jpg';
import img3 from './../img/3.jpg';
import img4 from './../img/4.jpg';
import styled from "styled-components";

const Slideshow = () => {
    const slideshow = useRef(null);
    //referencia para retornar o
    const intervaloSlideshow = useRef(null);

    const seguinte = () => {
        //pegamos os elementos que contem no slide show
        if(slideshow.current.children.length > 0){
            //obtemos o primeiro elemento do slidershow
            const primeiroElemento = slideshow.current.children[0];
            //definindo a transição para o slidershow
            slideshow.current.style.transition = `300ms ease-out all` ;
            //calculando o tamanho do slidershow
            const tamanhoSlider = slideshow.current.children[0].offsetWidth;
            //movemos o slideshow
            slideshow.current.style.transform = `translateX(-${tamanhoSlider}px)`;
            //percorrer o slideshow
            const transition = () => {
                //reinicia a posição do slidershow
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;
                //pegamos o primeiro slider e colocamos no final
                slideshow.current.appendChild(primeiroElemento);
                //remove o Eventlistener para prosseguir o retorno do slider
                slideshow.current.removeEventListener('transitionend', transition);
            }
            //Eventlistener para quando terminar a transição
            slideshow.current.addEventListener('transitionend', transition);
            
        }
    }
    
    const anterior = () => {
        //pegamos os elementos que contem no slide show
        if(slideshow.current.children.length > 0){
            //pegando o último elemento, -1, pois pega a última posição -1 para dar o último valor do vetor
            const index = slideshow.current.children.length - 1;
            //obtemos o último elemento do slideshow
            const ultimoElemento = slideshow.current.children[index];
            //percorrendo o último elemente e colocando em primeiro
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
            //removendo a transição no slideshow
            slideshow.current.style.transition = 'none';
            //calculando o tamanho do slidershow
            const tamanhoSlider = slideshow.current.children[0].offsetWidth;            
            //movemos o slideshow
            slideshow.current.style.transform = `translateX(-${tamanhoSlider}px)`;
            //definindo animação
            setTimeout(() => {
                //colocando a transição no slideshow
                slideshow.current.style.transition = `300ms ease-out all`;
                //movemos o slideshow
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);

        }
    }

    //userEffect permite passar uma função e esta função se executada todas as vezes que passa o parametro
    useEffect(() => {
        //colocar um tempo para o slider ir automático
        intervaloSlideshow.current = setInterval(() => {
            seguinte();
        }, 5000);

        //eliminatndo o intervalo ao passa o mouse
        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlideshow.current);
        });

        //retornar o intervalo ao tirar o mouse
        slideshow.current.addEventListener('mouseleave', () => {
            intervaloSlideshow.current = setInterval(() => {
                seguinte();
            }, 5000);
        });
    }, []);
    

    return (
        <ContainerPrincipal>
            <ContainerSlidershow ref={slideshow}>
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

//para reutilizar o componente slideshow, basta importar seus itens
export {Slideshow, Slide, TextoSlide};