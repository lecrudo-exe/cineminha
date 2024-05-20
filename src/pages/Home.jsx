import data from '../../vasco.json'

function Home() {
    console.log(data)
    return (
        <main>
            <input type="text" name= "busca" id="busca" placeholder="digite aqui seu nome" />
            <div className='lista-filme'>
                {
                    data.map(
                        filme 
                    )
                }
            </div>
        </main>
    );
}

export default Home;
<div className='card'>
    <h1>Titulo do filme</h1>
</div>