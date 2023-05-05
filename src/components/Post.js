export default function Post(props) {
    console.log(props);
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.src1} alt={props.alt1} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.src2} alt={props.alt2} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.src3} alt={props.alt3} />
                    <div class="texto">
                        Curtido por <strong>{props.usercurtida}</strong> e <strong>{props.numerocurtidas}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}