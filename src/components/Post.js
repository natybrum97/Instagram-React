export default function Post(props) {
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
                <img data-test="post-image" src={props.src2atributo} alt={props.alt2atributo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
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