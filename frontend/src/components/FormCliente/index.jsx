import { Caixa, CaixaForm } from "./styles";

function FormCliente(){
    return(
        <Caixa>
        <CaixaForm >
            <h1>CLiente</h1>
            <form >
                <label For="nome">Nome:</label>
                <input type="text" name="nome" id=""/><br/>
                
                <label For="nome">Telefone:</label>
                <input type="text" name="" id=""/><br/>

                <label For="nome">Data Nascimento:</label>
                <input type="text" name="" id=""/><br/>

                <label For="nome">CPF:</label>
                <input type="text" name="" id=""/><br/>

                <label For="nome">E-mail:</label>
                <input type="text" name="" id=""/><br/>

                <label For="nome">CEP:</label>
                <input type="text" name="" id=""/><br/>

                <label For="nome">Rua:</label>
                <input type="text" name="" id=""/><br/>

                <label For="nome">Bairro:</label>
                <input type="text" name="" id=""/><br/>

                <label For="nome">Cidade:</label>
                <input type="text" name="" id=""/><br/>

            </form>
        </CaixaForm >
        <CaixaForm >
            <h1>Ordem </h1>
            <form >
                
                <input type="text" name="" id=""placeholder="CLIENTE"/><br/>
                
                <label For="nome">Aparelho:</label>
                <input type="text" name="" id=""/><br/>

                <label For="nome">Marca:</label>
                <input type="text" name="" id=""/><br/>

                <label For="nome">Modelo:</label>
                <input type="text" name="" id=""/><br/>

                <label For="nome">Modelo:</label>
                <input type="text" name="" id=""/><br/>

                <label For="nome">Imei:</label>
                <input type="text" name="" id=""/><br/>

                <label For="nome">Senha:</label>
                <input type="text" name="" id=""/><br/>

                <label for="relato">Problema Relatado:</label>
                <textarea id="relat" name="relato" rows="4" cols="50"></textarea>


               

            </form>
        </CaixaForm >
        </Caixa>

    )
};
export default FormCliente;