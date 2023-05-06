import Suggestion from "./Suggestion"
export default function Suggestions() {
    const arraysuggestion = [
        {src:'assets/img/bad.vibes.memes.svg', alt:'bad.vibes.memes.svg', nome:'bad.vibes.memes.svg', segueounao:'Segue você'},
        {src:'assets/img/chibirdart.svg', alt:'chibirdart', nome:'chibirdart', segueounao:'Segue você'},
        {src:'assets/img/razoesparaacreditar.svg', alt:'razoesparaacreditar', nome:'razoesparaacreditar', segueounao:'Novo no Instagram'},
        {src:'assets/img/adorable_animals.svg', alt:'adorable_animals', nome:'adorable_animals', segueounao:'Segue você'},
        {src:'assets/img/smallcutecats.svg', alt:'smallcutecats', nome:'smallcutecats', segueounao:'Segue você'}
    ]
    return (
        <div className="sugestoes">
            
            <div className="titulo">
                <p className="vertudo">Sugestões para você</p>
                <div className="ver">Ver tudo</div>
            </div>

            {arraysuggestion.map(suggestion => <Suggestion key={suggestion.alt} srcatributo={suggestion.src} altatributo={suggestion.alt} nomeatributo={suggestion.nome} segueounaoatributo={suggestion.segueounao} />)}

        </div>

    )
}