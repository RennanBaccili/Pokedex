const offset =0
const limit=10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
// fetch retorna uma promise (promise é uma promessa de uma resposta, vc pode receber se da tudo certo)
//  Um processo assíncrono é um processo ou função que executa uma tarefa “em segundo plano”, sem que o usuário precise esperar que a tarefa termine.
fetch(url).then(function(response){
    console.log(response)
})