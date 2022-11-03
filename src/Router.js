import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Paginas/Home/Home'
import Carrinho from './Paginas/Carrinho/Carrinho'
import Pagamento from './Paginas/Pagamento/Pagamento'
import Navbar from './componentes/Navbar/Navbar'
import Sidebar from './componentes/Sidebar/Sidebar'
import SidebarDireito from './componentes/SidebarDireito/SidebarDireito'
import Data from './Produtos/Data';

function AppRouter() {
    const { products } = Data
    return (
        <BrowserRouter>
            <>
                <Navbar />
                <Sidebar />
                <SidebarDireito />
                <Routes>
                
                    <Route exact path="/" element={ <Home />}/>
                    <Route exact path="/carrinho" element={ <Carrinho />}/>
                    <Route exact path="/pagamento" element={ <Pagamento />}/>
                    
                </Routes>
            </>
        </BrowserRouter>
    )
}

export default AppRouter