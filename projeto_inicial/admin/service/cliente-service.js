/**inicializando a fetch */
const listaClientes = () => {
    /**por padrão faz get e devolve promise */
    return fetch(`http://localhost:3000/profile`)
    .then((resposta) => {
        return resposta.json();
    })
}
export const clienteService = {
    listaClientes
}

