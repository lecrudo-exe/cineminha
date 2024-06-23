import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PaginaFilmes() {

    const { id } = useParams();
    const [filme, setFilme] = useState([]);

    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e';
    const urlBase = 'https://api.themoviedb.org/3/movie/';
    const urlImg = 'https://image.tmdb.org/t/p/w1280/';

    useEffect(() => {
        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(erro => console.log(erro));
    }, [id]);

    return (
        <div className="flex flex-col items-center text-center p-4">
            <img className="object-cover mb-4 w-2/4 h-2/4" src={`${urlImg}${filme.backdrop_path}`} alt={filme.title} />
            <h1 className="text-white text-2xl font-bold mb-4">{filme.title}</h1>
            <p className="text-white max-w-2xl">{filme.overview}</p>
        </div>
    );
}

export default PaginaFilmes;
