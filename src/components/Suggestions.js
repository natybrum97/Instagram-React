import Suggestion from "./Suggestion"
export default function Suggestions() {
    return (
        <div class="sugestoes">
            
            <div class="titulo">
                <p class="vertudo">Sugestões para você</p>
                <div class="ver">Ver tudo</div>
            </div>

            <Suggestion src='assets/img/bad.vibes.memes.svg' alt='bad.vibes.memes.svg' nome='bad.vibes.memes.svg' segueounao='Segue você' />
            <Suggestion src='assets/img/chibirdart.svg' alt='chibirdart' nome='chibirdart' segueounao='Segue você' />
            <Suggestion src='assets/img/razoesparaacreditar.svg' alt='razoesparaacreditar' nome='razoesparaacreditar' segueounao='Novo no Instagram' />
            <Suggestion src='assets/img/adorable_animals.svg' alt='adorable_animals' nome='adorable_animals' segueounao='Segue você' />
            <Suggestion src='assets/img/smallcutecats.svg' alt='smallcutecats' nome='smallcutecats' segueounao='Segue você' />

        </div>

    )
}