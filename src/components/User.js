import { useState } from "react";

export default function User() {

    let [nome, setNome] = useState('catacomics');
    let [imagem, setImagem] = useState('assets/img/catanacomics.svg');

    function alterarNome() {
        let novoNome = prompt('Qual é o seu nome de usuário?')
        if (!novoNome) {
            return;
        }
        setNome(novoNome);
    }

    function trocarImagem(){
        let novaImagem = prompt('Digite o link de uma nova imagem');
        if (!novaImagem) {
            return;
        }
        setImagem(novaImagem);
    }

    return (

        <div class="usuario">
            <img data-test="profile-image" onClick={trocarImagem} src={imagem} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong data-test="name">{nome}</strong>
                    <ion-icon data-test="edit-name" onClick={alterarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}
