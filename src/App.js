import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./pages/Error";
import Galeria from "./pages/Galeria";
import Home from "./pages/Home";
import Producto from "./pages/ItemDetailContainer.js";
import ItemListContainer from "./pages/ItemListContainer";
import Productos from "./pages/Productos";


function App() {
  return (
    <BrowserRouter>     
      <Routes>
    <Route path="/" element={<ItemListContainer/>}>
    <Route index element={<Home/>}/>
    <Route path="galeria" element={<Galeria/>}/>
          <Route path="productos" element={<Productos />} />
          <Route path="productos/:productoId" element={<Producto/>}/>
    <Route path="*" element={<Error/>}/>
        </Route>       
      </Routes>        
    </BrowserRouter>
  );
}

export default App;