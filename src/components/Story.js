export default function Story(props) {

    return (
        <div className="story">
            <div className="imagem">
                <img src={props.srcatributo} alt={props.altatributo} />
            </div>
            <div className="usuario">
                {props.usuarioatributo}
            </div>
        </div>
    );
}