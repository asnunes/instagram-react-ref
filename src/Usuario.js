import { useState } from "react";

export default function Usuario() {
  const [nome, setNome] = useState("Editar perfil");
  const [foto, setFoto] = useState(
    "https://guiabrasileiroemisrael.com.br/wp-content/uploads/2017/06/sem-foto.png"
  );

  function editarUsuario() {
    let name = null;

    while (name === null || name === "") {
      name = prompt("Insira seu nome de usuário");
    }

    setNome(name);
  }

  function alterarFoto() {
    let profileImage = null;

    while (profileImage === null || profileImage === "") {
      profileImage = prompt("Insira a url da sua foto de perfil");
    }

    setFoto(profileImage);
  }

  return (
    <div class="perfil">
      <img onClick={alterarFoto} src={foto} alt="" data-test="profile-image" />
      <div class="user-perfil" data-test="user">
        <p data-test="username">
          <strong>fulano4d</strong>
        </p>
        <div class="editar-user">
          <p class="nome-perfil" data-test="name">
            {nome}
          </p>
          <ion-icon
            onClick={editarUsuario}
            class="icon-editar"
            name="pencil-outline"
            data-test="edit-name"
          ></ion-icon>
        </div>
      </div>
    </div>
  );
}
