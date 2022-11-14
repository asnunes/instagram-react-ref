function Sugestao(props) {
    return (
        <div class="sugestao">
            <img src={props.img} alt=""/>
            <div class="recomendado">
                <p class="usuario">{props.user}</p>
                <p class="infouser">Segue você</p>
            </div>
            <div class="follow">Seguir</div>
        </div>
    )
}

export default function Sugestoes() {

    const sugestoes = [
        {img: "./imgs/badvibesmemes 1.png", user: "badvibesmemes"},
        {img: "./imgs/chibirdart 1.png", user: "chibirdart"},
        {img: "./imgs/razoesparaacreditar 1.png", user: "razoesparaacreditar"},
        {img: "./imgs/adorableanimals 1.png", user: "adorableanimals"},
        {img: "./imgs/smallcutecats 1.png", user: "smallcutecats"}
    ]

    return (
        <div>
            {sugestoes.map((i) => (
                <Sugestao img={i.img} user={i.user}/>
            ))}
        </div>
    )
}