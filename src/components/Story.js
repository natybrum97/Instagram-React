export default function Story(props) {
    console.log(props);
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.src} alt={props.alt} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    );
}