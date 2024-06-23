import {Link} from 'react-router-dom'
function Navbar() {
    return ( 
        <nav>
            <ul className='flex gap-3'>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="filmes" className='text-white'>Filmes</Link></li>

            </ul>
        </nav>
     );
}

export default Navbar;