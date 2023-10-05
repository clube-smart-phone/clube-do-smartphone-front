import logo from './logo.png';
import { TopoHeader } from './styles';
function Header(){
    return(
        <TopoHeader> 
        <div>    
        <a href="/"><img src={logo} alt="" /></a>
        
        </div>    
        <nav>
            <ul>
                <li><a href="/cliente">Cliente</a></li>
                <li><a href="/">Ordem De Serviço</a></li>
                <li><a href="/">Financeiro</a></li>
            </ul>
        </nav>
        
        </TopoHeader>
    )
};
export default Header;