const offset =0
const limit=10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
//fech por padrão usa get
// fetch retorna uma promise (promise é uma promessa de uma resposta, vc pode receber se da tudo certo)
//  Um processo assíncrono é um processo ou função que executa uma tarefa “em segundo plano”, sem que o usuário precise esperar que a tarefa termine.
// then recebe a resposta do fetch
fetch(url) //promisse
    .then((response) => response.json())//me retorna a stream convertida, (função de call back)
    .then((jsonBody) => console.log(jsonBody)) // uma then recebe o retorn da then de cima
    .catch((error) => console.error(error))
    .finally(()=>console.log('Requisição Concluída'))

// encadeamento de thens 