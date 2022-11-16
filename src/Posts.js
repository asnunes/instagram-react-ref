import { useState } from "react";

function Post(props) {
  const [cor, setCor] = useState("");
  const [estiloIcone, setEstiloIcone] = useState("heart-outline");
  const [iconeSalvar, setIconeSalvar] = useState("bookmark-outline");
  const [curtida, setCurtida] = useState(0);

  console.log("TESTE POG", props);

  function curtirPostImage() {
    if (estiloIcone === "heart-outline") {
      setCor("red md hydrated");
      setEstiloIcone("heart");
      setCurtida(curtida + 1);
    }
  }

  function curtirPostLike() {
    if (estiloIcone === "heart-outline") {
      setCor("red md hydrated");
      setEstiloIcone("heart");
      setCurtida(curtida + 1);
    }
    if (estiloIcone === "heart") {
      setCor("md hydrated");
      setEstiloIcone("heart-outline");
      setCurtida(curtida - 1);
    }
  }

  function salvarPost() {
    setIconeSalvar("bookmark");

    if (iconeSalvar === "bookmark") {
      setIconeSalvar("bookmark-outline");
    }
  }

  return (
    <div class="post" data-test="post">
      <div class="post-topo">
        <div class="user-post">
          <img class="user-foto" src={props.imgUser} alt="" />
          <p class="user-nome">{props.userName}</p>
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>

      <img
        class="imgpost"
        src={props.imgPost}
        onDoubleClick={curtirPostImage}
        alt=""
        data-test="post-image"
      />

      <div class="post-interacoes">
        <div>
          <ion-icon
            class={cor}
            name={estiloIcone}
            onClick={curtirPostLike}
            data-test="like-post"
          ></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>

        <ion-icon
          name={iconeSalvar}
          onClick={salvarPost}
          data-test="save-post"
        ></ion-icon>
      </div>

      <div class="curtidas">
        <img src={props.imgLike} alt="" />
        <div class="numero-curtidas" data-test="likes-number">
          Curtido por <strong>{props.userLike}</strong> e{" "}
          <strong>outras {props.numberLike + curtida} pessoas</strong>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const posts = [
    {
      imgUser: "./imgs/meowed 1.png",
      userName: "meowed",
      imgPost: "./imgs/gato-telefone 1.png",
      imgLike: "./imgs/respondeai 1.png",
      userLike: "respondeai",
      numberLike: 453,
    },
    {
      imgUser: "./imgs/barked 1.png",
      userName: "barked",
      imgPost: "./imgs/dog 1.png",
      imgLike: "./imgs/adorableanimals 1.png",
      userLike: "adorableanimals",
      numberLike: 890,
    },
    {
      imgUser: "./imgs/nathanwpylestrangeplanet 1.png",
      userName: "nathanwpylestrangeplanet",
      imgPost: "./imgs/cats-nathanwpyle.jpg",
      imgLike: "./imgs/adorableanimals 1.png",
      userLike: "adorableanimals",
      numberLike: 504,
    },
  ];

  return (
    <div>
      {posts.map((i) => (
        <Post
          imgUser={i.imgUser}
          userName={i.userName}
          imgPost={i.imgPost}
          imgLike={i.imgLike}
          userLike={i.userLike}
          numberLike={i.numberLike}
        />
      ))}
    </div>
  );
}
