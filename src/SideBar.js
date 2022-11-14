import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

export default function SideBar() {
    return (
        <div class="sidebar" data-test="sidebar">
            <Usuario />
            
            <div class="sugestoes">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>

            <Sugestoes />

            <p class="infos">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags •
                Idioma
            </p>
            <p class="infos">© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    )
}