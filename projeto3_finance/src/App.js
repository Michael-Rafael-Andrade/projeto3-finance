import './App.css';
import Formulario from './form/Formulario.js';
import { useState, useEffect } from 'react';
import { getData, storeData } from './helper/localStorage.js';
import GraficoRosca from './components/GraficoRosca.js';
import GraficoBarra from './components/GraficoBarra.js';
import { v4 as uuidv4 } from 'uuid';
import TransactionItem from './components/TransactionItem.js';
import ResumoFinanceiro from './components/ResumoFinanceiro.js';

function App() {

  // Iniciando o estado para controlar as transações 
  const [transacoes, setTransacoes] = useState(() => {
    return getData("finance_data") || [];
  });

  // Observa e diz ao React se o arquivo foi alterado e salva no navegador
  useEffect(() => {
    storeData("finance_data", transacoes);
  }, [transacoes]);

  function handleAdd(dadosForm) {
    const novaTransacao = {
      ...dadosForm,
      id: uuidv4(),
      date: new Date().toLocaleDateString()
    };
    setTransacoes([
      ...transacoes,
      novaTransacao
    ]);
  }

  // 4. Função para eliminar: filtra a lista removendo o ID selecionado
  function handleDelete(id) {
    const listaFiltrada = transacoes.filter(item => item.id !== id);
    setTransacoes(listaFiltrada);
  }

  return (
    <div className="container-principal">
      {/* // Cabeçalho */}
      <header>
        <h1 className="titulo">Rastreador financeiro</h1>
      </header>

      {/* Seção Superior: Grid de 3 colunas para Resumo e Gráficos */}
      <div className="grid-superior">
        <ResumoFinanceiro transacoes={transacoes} />
        <div className="card-box">
          <h3>GraficoRosca.js Doughnut Chart (Gráfico de Rosca)</h3>
          <h4>Categoria de despesas</h4>
          <GraficoRosca transacoes={transacoes} />
        </div>
        <div className="card-box">
          <h3>GraficoBarra.js Bar Chart <br/>(Gráfico de Barras)</h3>
          <h4>Receitas vs. Despesas</h4>
          <GraficoBarra transacoes={transacoes} />

        </div>
      </div>

      {/* Seção Inferior: Grid de 2 colunas para Formulário e Histórico */}
      <div className="grid-inferior">
        <div className="card-box">
          <h3>Adicionar nova transação</h3>
          <Formulario aoEnviar={handleAdd} />
        </div>

        <div className="card-box listagem-container">
          <h3>Transações recentes</h3>

          <div className="transaction-header">
              <span>Data</span>
              <span>Descrição</span>
              <span>Categoria</span>
              <span>Valor</span>
          </div>

          <div className="data-container">
            {transacoes.length > 0 ? (
              transacoes.map((item) => (
                <TransactionItem
                  key={item.id}
                  {...item}
                  deleteTransaction={handleDelete}
                />
              ))
            ) : (
              <p className="center">Nenhuma transação encontrada.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
