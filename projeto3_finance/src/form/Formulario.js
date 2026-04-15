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
    const handleChange = (e) => {
        const { name, value } = e.target;

        if ( name === 'valor') {
            // Remove qualquer caractere que não seja número ou ponto
            const apenasNumeros = value.replace(/[^0-9.]/g, '');
            setFormData({ ...formData, [name]: apenasNumeros });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // const { name, value } = e.target;

    // setFormData({
    //     ...formData,
    //     [name]: name === 'valor' ? Number(value) : value
    // });


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

        <div className="form-row">
            <div className="form-group flex-2">
                <label className="form-label">Descrição</label>
                <input
                    // id="descricao"
                    name="descricao"
                    value={formData.descricao}
                    placeholder="Ex: Salário mensal, Compra de mercado"
                    onChange={handleChange}
                    className="form-input"
                />
            </div>
        </div>

        {/* Grupo Valor */}
        <div className="form-group flex-1">
            <label className="form-label">Valor (R$)</label>
            <input
                // id="valor"
                name="valor"
                // type="number"
                type="text" // Mudei para text para remover o 0 que fica a esquerda quando apago um número e tento digitar outro.
                value={formData.valor}
                placeholder="Digite valor"
                onChange={handleChange}
                className="form-input"
            />
        </div>

        {/* Grupo Categoria */}
        <div className="form-row">
            <div className="form-group flex-1">
                <label className="form-label">Categoria</label>
                <select
                    // id="categoria"
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
        </div>

        {/* Grupo Tipo */}
        <div className="form-group flex-1">
            <label className="form-label">Tipo</label>
            <select
                // id="tipo"
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