import { useState } from "react";

export default function Post(props) {

    let [salvo, setSalvo] = useState(false);
    let [curtido, setCurtido] = useState(false);

    function curtirPublicacao () {
        setCurtido(!curtido)
    }
    
    function curtirImagem () {
        if(curtido === false) {
            setCurtido(!curtido)
        }
    }

    function alternarSalvo() {
        setSalvo(!salvo);
    }

    console.log(props);
    return (
        <div data-test="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.src1atributo} alt={props.alt1atributo} />
                    {props.usuarioatributo}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" onClick={curtirImagem} src={props.src2atributo} alt={props.alt2atributo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={curtido ? "vermelho" : ""} data-test="like-post" name={curtido ? "heart" : "heart-outline"} onClick={curtirPublicacao}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" name={salvo ? "bookmark" : "bookmark-outline"} onClick={alternarSalvo}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.src3atributo} alt={props.alt3atributo} />
                    <div class="texto">
                        Curtido por <strong>{props.usercurtidaatributo}</strong> e <strong data-test="likes-number">outras {props.numerocurtidasatributo} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}