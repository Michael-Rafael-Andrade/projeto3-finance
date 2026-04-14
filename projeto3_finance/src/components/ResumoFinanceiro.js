import React from 'react';

function ResumoFinanceiro({ transacoes }){
    // .reduce percorre a lista e soma os valores baseados no tipo
    const receitas = transacoes
        .filter(t => t.tipo === 'entrada')
        .reduce((acc, curr) => acc + Number(curr.valor), 0);

    const despesas = transacoes
        .filter(t => t.tipo === 'saida')
        .reduce((acc, curr) => acc + Number(curr.valor), 0);
    
    const saldo = receitas - despesas;

    return (
        <div className="card-box">
            <h3>Resumo financeiro</h3>
            <div className="summary-item">
                <span>Renda Total (Verde):</span>
                <strong>R$ {receitas.toFixed(2)}</strong>
            </div>
            <div className="summary-item">
                <span>Total de despesas (Vermelho):</span>
                <strong>R$ {despesas.toFixed(2)}</strong>
                {/* <strong>R$ {saldo.toFixed(2)}</strong> */}
            </div>
            <div className="summary-item">
                <span>Saldo Final:</span>
                <strong>R$ {saldo.toFixed(2)}</strong>
            </div>
        </div>
    );
}

export default ResumoFinanceiro;