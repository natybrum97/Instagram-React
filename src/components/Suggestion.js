export default function Suggestion(props) {
    
    return (
        <div className="sugestao">
                <div className="usuario">
                    <img src={props.srcatributo} alt={props.altatributo} />
                    <div className="texto">
                        <div className="nome">{props.nomeatributo}</div>
                        <div className="razao">{props.segueounaoatributo}</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div>
    );
}