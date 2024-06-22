import data from '../../artigos.json';

function Home() {
    return ( 
        <div className='p-8 font-roboto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    data.map(filme => (
                        <div className="card bg-white shadow-lg rounded-lg overflow-hidden" key={filme.title}>
                            <img className='w-1/2 h-1/2 object-cover' src={filme.image} alt={filme.title}/>
                            <div className='p-6'>
                                <h1 className="text-2xl font-bold mb-4"> {filme.title} </h1>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {filme.tags.map(tag => (
                                        <span className='bg-gray-800 p-2 rounded-md text-white text-sm' key={tag}> {tag} </span>
                                    ))}
                                </div>
                                <div className="texto">
                                    {filme.text.map(texto => (
                                        <p className="text-gray-700 mb-2" key={texto}> {texto} </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;

