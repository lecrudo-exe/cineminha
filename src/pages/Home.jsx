import data from "../../vasco.json";

function Home() {
  console.log(data);
  return (
    <main>
      <input
        type="text"
        name="busca"
        id="busca"
        placeholder="digite aqui seu nome"
      />
  
       {data.map(filme =>(
        <>    <div className="lista-filme" key={filme.title}>
        <h1>{filme.title}</h1>
        <img src={filme.image} alt={filme.title} />
        <div className="tag">
            {filme.tags.map(tag =>(
                <span key={tag} className="text-purple-900">{tag}</span>
            ))}
        </div>
        <div className="texto">
            {filme.text.map(texto => (
                <p key={texto}> {texto}</p>
            ))}
        </div>
        </div>
        </>
       ))}
      
    </main>
  );
}

export default Home;
<div className="card">
  <h1>Titulo do filme</h1>
  <img src="/public/wwa.jpg" />
</div>;
