import { useState } from 'react';

// Recebe a função via PROP
function Formulario({ aoEnviar }) {

    const [formData, setFormData] = useState({
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

    function handleSubmit() {
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
        <form className="form-container">

            <div className="form-group">
                <label htmlFor="descricao" className="form-label">Descrição</label>
                <input
                    id="descricao"
                    name="descricao"
                    value={formData.descricao}
                    placeholder="Ex: Salário mensal, Compra de mercado"
                    onChange={handleChange}
                    className="form-input"
                />
            </div>

            {/* Grupo Valor */}
            <div className="form-group">
                <label htmlFor="valor" className="form-label">Valor (R$)</label>
                <input
                    id="valor"
                    name="valor"
                    type="number"
                    value={formData.valor}
                    placeholder="Digite o valor"
                    onChange={handleChange}
                    className="form-input"
                />
            </div>

            {/* Grupo Categoria */}
            <div className="form-group">
                <label htmlFor="categoria" className="form-label">Categoria</label>
                <select
                    id="categoria"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    className="form-select styled-select" 
                >
                    <option value="">Selecione a Categoria</option>
                    <option value="Alimentação">Alimentação</option>
                    <option value="Moradia">Moradia</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Salario">Salario</option>
                </select>
            </div>

            {/* Grupo Tipo */}
            <div className="form-group">
                <label htmlFor="tipo" className="form-label">Tipo</label>
                <select
                    id="tipo"
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    className="form-select styled-select" 
                >
                    <option value="">Entrada / Saída</option>
                    <option value="entrada">Entrada</option>
                    <option value="saida">Saída</option>
                </select>
            </div>

            <div className="options-bar">
                Alimentação, Moradia, Transporte, Lazer, Salário
            </div>

            {/* Botão de Enviar */}
            <button
                type="button"
                onClick={handleSubmit}
                disabled={!formularioValido()}
                className="btn-add-transaction"
            >
                Adicionar Transação
            </button>
        </form>
    );
}


export default Formulario;