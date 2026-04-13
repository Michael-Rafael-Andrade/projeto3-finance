import { useState, useEffect } from 'react';
import { salvarTransacoes, buscarTransacoes } from '../helper/localStorage.js';

// Recebe a função via PROP
function Formulario({ aoEnviar }) { 

    const [ formData, setFormData ] = useState({
        descricao: '',
        valor: '',
        categoria: '',
        tipo: ''
    });

    // Criar a parte que captura o que foi digitado dentro do input e armazena 
    const handleChange = ((e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    // });
    });

    function handleSubmit(){
       // Envia os dados para o App.js
        aoEnviar(formData);

        // Limpa os campos
        setFormData({
            descricao: '',
            valor: '',
            categoria: '',
            tipo: ''
        });
    }
       
   

    // Função de validação simples para o botão funcionar
    const formularioValido = () => {
        return formData.descricao !== '' && formData.valor > 0 && formData.categoria !== '' && formData.tipo !== '';
    };

    return (
        <div>

            {/* // Input para capturar os dados do nome (name) */}
            <input name="descricao" value={formData.descricao} onChange={handleChange} />

            {/* // Input para capturar os dados do valor (value) */}
            <input name="valor" type="number" value={formData.valor} onChange={handleChange} />


            {/* // Criar o botão para enviar os dados se estiver preenchido todos os campos */}
            <button
                type="button"
                onClick={handleSubmit}
                disabled={!formularioValido()}
            >
                Adicionar Transação
            </button>
        </div>
    );
}


   
export default Formulario;





    // // Iniciando o estado para controlar as transações 
    // const [ transacoes, setTransacoes ] = useState(buscarTransacoes());

    // // Observa e diz ao React se o arquivo foi alterado
    // useEffect(() => {
    //     salvarTransacoes(transacoes);
    // }, [transacoes]);

    // // Adicionar transações utilizando o useState (setTransacoes) e o spread operator [...]
    // function adicionarTransacao(){
    //     setTransacoes((transacoes) => [
    //         ...transacoes,
    //         formData
    //     ]);


        //     // É necessário limpar o formulário para uma possível nova requisição
    //     setFormData({
    //         descricao: '',
    //         valor: '',
    //         categoria: '',
    //         tipo: ''
    //     });
    // }





    
    // // Validar o formulário ( verifica se todos os campos estão preenchidos )
    // const formularioValido = (() => {

    //     // Verifica se o valor não é menor do que zero
    //     if(Number(formData.valor) <= 0){
    //         return false;
    //     }

    //     // Verifica se a descrição não está vazia
    //     if (formData.descricao === '') {
    //         return false;
    //     }

    //     // Verifica se uma categoria foi selecionada
    //     if (formData.categoria === '') {
    //         return false;
    //     }

    //     // Verifica se um tipo foi selecionado
    //     if (formData.tipo === '') {
    //         return false;
    //     }

    //     // Se passou por todos os IF (SE), o formulário está válido
    //     return true;
    // });



        
       
       
       
       
       
    //     // Criar o objeto final 
    //     const novaTransacao = {
    //         ...formData,
    //         id: Date.now(), // Simulando um id único
    //         date: new Date().toLocaleDateString()
    //     };

    //     aoEnviar(novaTransacao); // Chama a função que veio do App.js

    //     // Limpa os campos para uma possível inserção de dados
    //     setFormData({
    //         descricao: '',
    //         valor: '',
    //         categoria: '',
    //         tipo: ''
    //     });
    // }
 