export default function Suggestion(props) {
    console.log(props);
    return (
        <div class="sugestao">
                <div class="usuario">
                    <img src={props.srcatributo} alt={props.altatributo} />
                    <div class="texto">
                        <div class="nome">{props.nomeatributo}</div>
                        <div class="razao">{props.segueounaoatributo}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
    );
}