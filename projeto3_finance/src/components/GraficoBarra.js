import { Bar as BarChart } from 'react-chartjs-2';
import { Chart as ChartJS , CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend );

const options = {
    responsive: true,
    maintainAspectRatio: false,
};

function GraficoBarra({transacoes}){

    const receitas = transacoes
        .filter(t => t.tipo === 'entrada')
        .reduce((acc, curr) => acc + Number(curr.valor), 0);

    const despesas = transacoes
        .filter(t => t.tipo === 'saida')
        .reduce((acc, curr) => acc + Number(curr.valor), 0);

    const data = {
        labels: ['Receitas', 'Despesas'],
        datasets: [{
            label: 'R$',
            data: [receitas, despesas],
            backgroundColor: ['#4caf50', '#f44336']
        }]
    };

    return (
        <div style={{ height: '250px' }}>
            <BarChart data={data} options={options} />
        </div>
    );
}

export default GraficoBarra;