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
                
                <label For="nome">Telefone:</label>
                <input type="text" name="" id="" onChange={handleChange} value={usuario.telefone}/><br/>

                <label For="nome">Data Nascimento:</label>
                <input type="text" name="" id="" onChange={handleChange} value={usuario.dataDeNascimento}/><br/>

                <label For="nome">CPF:</label>
                <input type="text" name="" id="" onChange={handleChange} value={usuario.cpf}/><br/>

                <label For="nome">E-mail:</label>
                <input type="text" name="" id="" onChange={handleChange} value={usuario.email}/><br/>

                <label For="nome">CEP:</label>
                <input type="text" name="" id="" onChange={handleChange}/><br/>

                <label For="nome">Rua:</label>
                <input type="text" name="" id="" onChange={handleChange}/><br/>

                <label For="nome">Bairro:</label>
                <input type="text" name="" id="" onChange={handleChange}/><br/>

                <label For="nome">Cidade:</label>
                <input type="text" name="" id="" onChange={handleChange} /><br/>

                <button type="submit">Cadastrar</button>

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

                <button>Cadastrar</button>


               

            </form>
        </CaixaForm >
        </Caixa>

    )
};
export default FormCliente;