import './App.css';
import Formulario from './form/Formulario.js';
import { useState, useEffect } from 'react';
import { getData, storeData } from './helper/localStorage.js';
import GraficoRosca from './components/GraficoRosca.js';
import GraficoBarra from './components/GraficoBarra.js';
import { v4 as uuidv4 } from 'uuid';
import TransactionItem from './components/TransactionItem.js';

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



  // // Adicionar transações utilizando o useState (setTransacoes), spread operator [...] e passar via props
  // const adicionarNovaTransacao = ((novaTransacao) => {
  //   setTransacoes([
  //     ...transacoes,
  //     novaTransacao
  //   ])
  // });

  return (
    <div className="App">
      <h1>Finance Tracker</h1>

      {/* Seção de Entrada de Dados */}
      <section>
        <Formulario aoEnviar={handleAdd} />
      </section>
      {/* Seção Visual: Gráficos */}
      <section className="charts-container">
        <GraficoBarra transacoes={transacoes} />
        {/* Próximo passo: GraficoRosca aqui */}
      </section>

      {/* Seção de Listagem: Histórico de transações */}
      <div className="data-container">
        <h3>Transações Recentes</h3>
        {transacoes.length > 0 ? (
          transacoes.map((item) => (
            <TransactionItem
              key={item.id}
              {...item} // Passa todas as propriedades (id, valor, etc.)
              deleteTransaction={handleDelete}
            />
          ))
        ) : (
          <p className="center">Nenhuma transação encontrada.</p>
        )}
      </div>
    </div>
  );
}

export default App;
