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
    const sinal = tipo === 'entrada' ? '+' : '-';

    return (
        <div className={`transaction-card ${typeClass}`}>
            {/* Coluna 1: Data */}
            <div className="col-date">{date}</div>

            {/* Coluna 2: Descrição */}
            <div className="col-desc">
                <strong>{descricao}</strong>
            </div>

            {/* Coluna 3: Categoria */}
            <div className="col-category">{categoria}</div>

            {/* Coluna 4: Valor (com cor e sinal específicos) */}
            <div className={`col-amount ${tipo}`}>
                {sinal} R$ {Number(valor).toFixed(2)}
            </div>

            {/* Botão de excluir */}
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