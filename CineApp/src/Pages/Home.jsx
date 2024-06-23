import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Home() {
    const [filmes, setFilmes] = useState([]);
    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e';
    const urlBase = 'https://api.themoviedb.org/3/movie/';
    const urlImg = 'https://image.tmdb.org/t/p/w1280/';

    useEffect(() => {
        fetch(`${urlBase}popular?${apiKey}&language=pt-BR`)
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(erro => console.log(erro));
    }, []);

    return (
        <div className="grid justify-items-center">
            <h1 className="text-5xl font-bold my-4 text-slate-300">Bombando no momento</h1>

            <div className="flex">
                <div className="">
                    {filmes.length > 0 && (
                        <div className="grid justify-items-center">
                            <img className="w-5/6" src={`${urlImg}${filmes[0].backdrop_path}`} alt={filmes[0].title} />
                            <p className="text-slate-100 text-3xl">{filmes[0].title}</p>
                        </div>
                    )}
                </div>
                <div className="">
                    {filmes.length > 0 && (
                        <div className="grid justify-items-center">
                            <img className="w-5/6" src={`${urlImg}${filmes[1].backdrop_path}`} alt={filmes[0].title} />
                            <p className="text-slate-100 text-3xl">{filmes[1].title}</p>
                        </div>
                    )}
                </div>
                <div className="">
                    {filmes.length > 0 && (
                        <div className="grid justify-items-center">
                            <img className="w-5/6" src={`${urlImg}${filmes[3].backdrop_path}`} alt={filmes[0].title} />
                            <p className="text-slate-100 text-3xl">{filmes[3].title}</p>
                        </div>
                    )}
                </div>
            </div>
                    <h2 className="text-slate-300 m-20 text-5xl">
                        Você também pode gostar!
                    </h2>
            <div className="flex flex-wrap">
                {
                    filmes.slice(0, 8).map(filme => (
                        <div className="card-filme max-w-xs text-center m-10" key={filme.id}>
                            <img className="object-cover" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                            <h2 className="text-lg text-slate-300 font-semibold mt-4">{filme.title}</h2>
                            <Link to={`filmes/${filme.id}`} className="bg-amber-500 text-white py-2 px-4 rounded mt-2 inline-block">Saber mais</Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default Home;
