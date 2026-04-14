import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function GraficoRosca({ transacoes }) {
    // Filtra apenas as despesas para o gráfico de categorias
    const despesas = transacoes.filter(t => t.tipo === 'saida');

    // Agrupa valores por categoria (exemplo simples)
    const categorias = [...new Set(despesas.map(t => t.categoria))];
    const valores = categorias.map(cat =>
        despesas.filter(t => t.categoria === cat).reduce((acc, curr) => acc + Number(curr.valor), 0)
    );

    const data = {
        labels: categorias,
        datasets: [{
            data: valores,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        }]
    };

    return <Doughnut data={data} />;
}

export default GraficoRosca;