import Navbar from "../Navbar/Navbar"

function Header() {
    return (
        <header className="flex justify-around bg-primary-raul text-white">
            <span> Olá, visitante!</span>
            <h1 className="text-xl text-center"> Bem-vindo ao Cine Tutopirulin</h1>
            <Navbar></Navbar>
        </header>
    )
}

export default Header