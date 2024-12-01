function pesquisar() {
    // Função responsável por pesquisar e exibir os resultados na seção "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos
    let campoPesquisa = document.getElementById('campo-pesquisa').value;
    
    if(!campoPesquisa){
        section.innerHTML = "<p>Por favor, digite algo para pesquisar.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = ""; 
    let titulo = "";
    let descricao = "";
    let tag = "";

    // Itera sobre cada dado na array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tag = dado.tag.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)){
            // Constrói o HTML para cada item de resultado
            resultados += `
            <div class="item-resultado">
            <h3>${dado.titulo}</h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Saiba mais</a>
            </div>
            `;
            }
        }

        if (!resultados) {
            resultados = "<p>Resultado não encontrado</p>"
        }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;

    // Adiciona o evento para capturar a tecla Enter
    campoInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        realizarPesquisa();
    }
});
}
