import PropTypes from "prop-types";

// Componente para exibir os detalhes de uma única transação (entrada ou saída)
function TransactionItem({
    id,
    descricao,
    valor,
    categoria,
    tipo,
    date,
    deleteTransaction 
}){
    // função que dispara a remoção da transação lá no App.js, usando o ID único
    function handleDelete(){
        deleteTransaction(id);
    }

    // Definir uma cor ou classe de acordo com as cores da imagem apresentada no desafio do projeto 3 (entrada = verde, saída = vermelho)
    const typeClass = tipo === 'entrada' ? 'item-entrada' : 'item-saida';

    return (
        <div className={`transaction-card ${typeClass}`}>
            <div className="transaction-info">
                {/* Exibe a data e a descrição da movimentação */}
                <span className="transaction-date">{date}</span>
                <strong className="transaction-desc">{descricao}</strong>

                {/* Exibe a categoria e o valor formatado */}
                <div className="transaction-details">
                    <span>{categoria}</span>
                    <span>R$ {Number(valor).toFixed(2)}</span> 
                </div>
            </div>

            {/* Botão de excluir, similar ao do projeto IMC */}
            <button className="delete-btn" onClick={handleDelete}>
                X
            </button>

        </div>
    );

}

/*
Validação das propriedades para garantir que o componente receba os dados corretos
*/
TransactionItem.propTypes = {
    id: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    valor: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    categoria: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    deleteTransaction: PropTypes.func.isRequired
};

export default TransactionItem;