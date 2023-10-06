import { Caixa, CaixaForm } from "./styles";
import { useState } from "react";
import axios from 'axios';

function FormCliente(){

    const [usuario, setUsuario] = useState({
        nome: '',
        telefone: '',
        dataDeNascimento: '',
        cpf: '',
        email: '',

    });

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setUsuario({...usuario,
            [name]:value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:8080/clientes', usuario, {
  
    })


    }
    catch(error){
        console.error('Erro ao Cadastrar', error)
    }

    console.log(usuario.nome)
}
    
    return(
        <Caixa>
        <CaixaForm >
            <h1>CLiente</h1>
            <form onSubmit={handleSubmit}>
                <label For="nome">Nome:</label>
                <input type="text" name="nome" id="" onChange={handleChange} value={usuario.nome} /><br/>
                
                <label For="telefone">Telefone:</label>
                <input type="text" name="telefone" id="" onChange={handleChange} value={usuario.telefone}/><br/>

                <label For="date">Data Nascimento:</label>
                <input type="date" name="date" id="" onChange={handleChange} value={usuario.dataDeNascimento}/><br/>

                <label For="cpf">CPF:</label>
                <input type="text" name="cpf" id="" onChange={handleChange} value={usuario.cpf}/><br/>

                <label For="email">E-mail:</label>
                <input type="text" name="email" id="" onChange={handleChange} value={usuario.email}/><br/>

                <label For="cep">CEP:</label>
                <input type="text" name="cep" id="" onChange={handleChange}/><br/>

                <label For="rua">Rua:</label>
                <input type="text" name="rua" id="" onChange={handleChange}/><br/>

                <label For="bairro">Bairro:</label>
                <input type="text" name="bairro" id="" onChange={handleChange}/><br/>

                <label For="cidade">Cidade:</label>
                <input type="text" name="cidade" id="" onChange={handleChange} /><br/>

                <button type="submit">Cadastrar</button>

            </form>
        </CaixaForm >
        <CaixaForm >
            <h1>Ordem </h1>
            <form >
                
                <input type="text" name="" id=""placeholder="CLIENTE"/><br/>
                
                <label For="aparelho">Aparelho:</label>
                <input type="text" name="aparelho" id=""/><br/>

                <label For="marca">Marca:</label>
                <input type="text" name="marca" id=""/><br/>

                <label For="modelo">Modelo:</label>
                <input type="text" name="modelo" id=""/><br/>

                <label For="imei">Imei:</label>
                <input type="text" name="imei" id=""/><br/>

                <label For="senha">Senha:</label>
                <input type="text" name="senha" id=""/><br/>

                <label for="relato">Problema Relatado:</label>
                <textarea id="relat" name="relato" rows="4" cols="50"></textarea>

                <button>Cadastrar</button>              

            </form>
        </CaixaForm >
        </Caixa>

    )
};
export default FormCliente;