
// Converter para string
export const salvarTransacoes = ((transacoes) => {
    // transforma o array em string e salva
    localStorage.setItem('finance_data', JSON.stringify(transacoes));
});

export const buscarTransacoes = (() => {
    const dados = localStorage.getItem('finance_data');
    // Lógica -> Se existir algo irá transformar de volta em array com o comando JSON.parse()
    // Se não houver nada retorna um array (vetor) vázio
    return (
        dados ? (JSON.parse(dados)) : []
    );
});

function localStorage(){


    return(
        <>
        </>
    );
}

export default localStorage;