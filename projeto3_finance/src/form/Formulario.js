import { useState, useEffect } from 'react';

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
            [name]: name === 'valor' ? Number(value) : value
        });
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
        <div className="form-container">

            {/* // Input para capturar os dados do nome (name) */}
            <input name="descricao" value={formData.descricao} placeholder="Descrição" onChange={handleChange} />

            {/* // Input para capturar os dados do valor (value) */}
            <input name="valor" type="number" value={formData.valor} placeholder="Valor" onChange={handleChange} />

            {/* Opções de seleção dentro input categoria */}
            <select name="categoria" value={formData.categoria} onChange={handleChange}>
                <option value="">Selecione a Categoria</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Moradia">Moradia</option>
                <option value="Transporte">Transporte</option>
                <option value="Lazer">Lazer</option>
                <option value="Salario">Salario</option>
            </select>

            {/* Tipo ( Entrada ou Saída) */}
            <select name="tipo" value={formData.tipo} onChange={handleChange}>
                <option value="">Tipo</option>
                <option value="entrada">Entrada</option>
                <option value="saida">Saida</option>
            </select>
            


            {/* // Criar o botão para enviar os dados se estiver preenchido todos os campos */}
            <button
                type="button"
                onClick={handleSubmit}
                disabled={!formularioValido()}
                className="btn-enviar"
            >
                Adicionar Transação
            </button>
        </div>
    );
}


   
export default Formulario;