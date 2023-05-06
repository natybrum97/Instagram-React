import { useState } from "react";

export default function Post(props) {

    let [salvo, setSalvo] = useState(false);
    let [curtido, setCurtido] = useState(false);
    let [numero, setNumero] = useState(Number((props.numerocurtidasatributo).toString().replace(".", "")))

    function curtirPublicacao() {
        setCurtido(!curtido)
        if (curtido === false) {
            setNumero(numero += 1);
        } else {
            setNumero(numero -= 1);
        }
    }

    function curtirImagem() {
        if (curtido === false) {
            setCurtido(!curtido)
            setNumero(numero += 1);
        } else {
            setNumero(numero -= 1);
        }
    }

    function alternarSalvo() {
        setSalvo(!salvo);
    }

    return (
        <div data-test="post" className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.src1atributo} alt={props.alt1atributo} />
                    {props.usuarioatributo}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img data-test="post-image" onDoubleClick={curtirImagem} src={props.src2atributo} alt={props.alt2atributo} />
                <ion-icon class={curtido ? "coracao-animado" : "display"} name="heart"></ion-icon>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon class={curtido ? "vermelho" : "nada"} data-test="like-post" name={curtido ? "heart" : "heart-outline"} onClick={curtirPublicacao}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" name={salvo ? "bookmark" : "bookmark-outline"} onClick={alternarSalvo}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.src3atributo} alt={props.alt3atributo} />
                    <div className="texto">
                        Curtido por <strong>{props.usercurtidaatributo}</strong> e <strong data-test="likes-number">outras {numero.toLocaleString({ minimumFractionDigits: 3})} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}