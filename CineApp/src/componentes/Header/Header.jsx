import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex bg-amber-500 p-4 text-white justify-around 	border-radius: 0.125rem;">
            <span>Olá, visitante!</span>
            <h1>Bem vindo ao Cinema</h1>
            <Navbar></Navbar>
        </header>
     );
}

export default Header;