function Story(props) {
    return (
        <div class="story" data-test="stories">
            <img class="bordaimg" src={props.border} alt=""/>
            <img class="storyimg" src={props.img} alt=""/>
            <p class="user">{props.user}</p>
        </div>
    )
}

export default function Stories() {

    const stories = [
        {
            border: "./imgs/stories_background.jpg",
            img: "./imgs/9gag 1.png",
            user: "9gag"
        },
        {
            border: "./imgs/stories_background.jpg",
            img: "./imgs/meowed 1.png",
            user: "meowed"
        },
        {
            border: "./imgs/stories_background.jpg",
            img: "./imgs/barked 1.png",
            user: "barked"
        },
        {
            border: "./imgs/stories_background.jpg",
            img: "./imgs/nathanwpylestrangeplanet 1.png",
            user: "nathanwpy..."
        },
        {
            border: "./imgs/stories_background.jpg",
            img: "./imgs/wawawiwacomicsa 1.png",
            user: "wawawiwa..."
        },
        {
            border: "./imgs/stories_background.jpg",
            img: "./imgs/respondeai 1.png",
            user: "respondeai"
        },
        {
            border: "./imgs/stories_background.jpg",
            img: "./imgs/filomoderna 1.png",
            user: "filomoderna"
        },
        {
            border: "./imgs/stories_background.jpg",
            img: "./imgs/memeriagourmet 1.png",
            user: "memeria"
        }
    ]

    return (
        <div class="stories">
            {stories.map((i) => (
            <Story border={i.border} img={i.img} user={i.user}/>
            ))}
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    )
}