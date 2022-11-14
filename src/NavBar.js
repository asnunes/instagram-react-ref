export default function NavBar() {
    return (
        <div>
            <div class="navbar" data-test="navbar">
                <div class="topo">
                    <div class="topo-logo">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div class="barrinha"></div>
                        <img src="./imgs/logo.png" alt=""/>
                    </div>

                    <input class="pesquisar" placeholder="Pesquisar"></input>

                    <div class="topo-icons">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
            </div>

            <div class="top-mobile">
                <ion-icon name="logo-instagram"></ion-icon>
                <img src="./imgs/logo.png" alt=""/>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>

            <div class="bottom-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}