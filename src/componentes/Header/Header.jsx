import Navbar from "../Navbar/Navbar"

function Header() {
    return (
        <header className="flex">
            <span> Olá, visitante!</span>
            <h1> Bem-vindo ao Cine Tutopirulin</h1>
            <Navbar></Navbar>
        </header>
    )
}

export default Header