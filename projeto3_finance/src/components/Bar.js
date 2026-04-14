// import { Bar as BarChart } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend );

// function GraficoBarra({transacoes}){
//     // Lógica para somar totais
//     const receitas = transacoes
//         .filter(t => t.tipo === 'entrada')
//         .reduce((acc, curr) => acc + Number(curr.valor), 0);

//     const despesas = transacoes
//         .filter(t => t.tipo === 'saida')
//         .reduce((acc, curr) => acc + Number(curr.valor), 0);

//     const data = {
//         labels: ['Receitas', 'Despesas'],
//         datasets: [{
//             label: 'R$',
//             data: [receitas, despesas],
//             backgroundColor: ['#4caf50', '#f44336'] // tonalidade próxima verde e vermelho
//         }]
//     };

//     return <BarChart data={data} />

// }