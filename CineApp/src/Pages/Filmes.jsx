import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Filmes() {

    const [filmes, setFilmes] = useState([]);
    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e';
    const urlBase = 'https://api.themoviedb.org/3/movie/';
    const urlImg = 'https://image.tmdb.org/t/p/w780/';

    useEffect(() => {
        fetch(`${urlBase}popular?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(erro => console.log(erro));
    }, []);

    return ( 
        <>
        <h1 className="text-center text-2xl font-bold my-4">Filmes</h1>
        <div className="flex flex-wrap justify-center gap-4">
        {
            filmes.map(filme => (
                <div className="card-filme max-w-xs text-center" key={filme.id}>
                    <img className="w-full h-72 object-cover mb-2" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                    <h2 className="text-lg font-semibold">{filme.title}</h2>
                    <Link to={`${filme.id}`} className="bg-blue-500 text-white py-2 px-4 rounded mt-2 inline-block">Saber mais</Link>
                </div>
            ))
        }
        </div>
        </>
    );
}

export default Filmes;
