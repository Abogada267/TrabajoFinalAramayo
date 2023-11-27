import { Outlet } from "react-router-dom";
import Navbar from '../components/NavBar/NavBar';

function ItemListContainer() {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <footer>Pie de Pagina</footer>
        </div>
    )
}

export default ItemListContainer;
