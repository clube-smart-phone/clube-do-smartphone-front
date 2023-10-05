import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homes";
import Cliente from "./pages/Cliente";
import OrdemDeServico from"./pages/OrdemDeServico";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/cliente" element={<Cliente />}/>
                <Route path="/ordemdeservico" element={<OrdemDeServico />}/> 
            </Routes>
        </BrowserRouter>
        

    )
};
export default AppRoutes;