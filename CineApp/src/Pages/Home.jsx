import data from '../../artigos.json'
function Home() {
    return ( 
        <>
        <input type="text" id="buscar" placeholder='Digite sua busca'/>
            <div className='grid grid-cols-3 gap-4'>
                {
                    data.map(filme => (
                        <div className="card" key={filme.title}>
                        <h1> {filme.title} </h1>
                        <img className='mb-2 sm:px-12 p-8 h-screen;' src={filme.image} alt={filme.title}/>
                            <div className='tag'>
                                {filme.tags.map(tag =>(
                                        <span className='bg-black p-1 m-1 rounded-lg text-white' key = {tag}> {tag} </span>
                                    ))}
                            </div>
                            <div className="texto">
                                {filme.text.map( texto => (
                                <p key={texto}> {texto} </p>
                        ))}
                    </div>
                        </div>
                    ))}
                    
            </div>
        </>
     );
}

export default Home;