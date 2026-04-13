

/*
 Verifica se o navegador suporta o local storage para evitar erros em abientes onde o local é desativado.
*/
function isStorageAvailable(){
    try{
        return typeof localStorage !== 'undefined';
    }catch(error){
        return false;
    }
}

// Recupera os dados do local storage // Serve para carregar as transações salvas ao abrir a aplicação.
export function getData(key){
    if(!isStorageAvailable()){
        return null;
    }
    try{
        const item = localStorage.getItem(key);
        // Transforma a string JSON de volta para array/objeto
        return item ? JSON.parse(item) : null;
    } catch(error){
        console.error("Erro ao recuperar item", error);
        return null;
    }
}

// Armazena dados no local storage // Converte o array de transações em string JSON 
export function storeData(key, item){
    if(!isStorageAvailable()){
        return null;
    }
    try{
        localStorage.setItem(key, JSON.stringify(item));
    } catch (error){
        console.log("Erro ao gravar item");
    }
}









// // Converter para string
// export const salvarTransacoes = ((transacoes) => {
//     // transforma o array em string e salva
//     localStorage.setItem('finance_data', JSON.stringify(transacoes));
// });

// export const buscarTransacoes = (() => {
//     const dados = localStorage.getItem('finance_data');
//     // Lógica -> Se existir algo irá transformar de volta em array com o comando JSON.parse()
//     // Se não houver nada retorna um array (vetor) vázio
//     return (
//         dados ? (JSON.parse(dados)) : []
//     );
// });
