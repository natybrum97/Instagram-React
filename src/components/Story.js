export default function Story(props) {
    console.log(props);
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.srcatributo} alt={props.altatributo} />
            </div>
            <div class="usuario">
                {props.usuarioatributo}
            </div>
        </div>
    );
}