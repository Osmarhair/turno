const formulario = document.getElementById("formulario");
const corpoDaTabela = document.getElementById("corpoDaTabela");

formulario.addEventListener("submit", function(event) {

    const placa = document.getElementById("placa").value;
    const assciado = document.getElementById("associado").value;
    const operacao = document.getElementById("operacao").value;
    const status = document.getElementById("status").value;
    const lancamentos = document.getElementById("lancamentos").value;
    const protocolo = document.getElementById("protocolo").value;


    const novaLinha = corpoDaTabela.insertRow();
    
    const celulaPlaca = novaLinha.insertCell();
    celulaPlaca.textContent = placa; 

    const celulaAssociado = novaLinha.insertCell();
    celulaAssociado.textContent = assciado; 

    const celulaOperacao = novaLinha.insertCell();
    celulaOperacao.textContent = operacao; 

    const celulaStatus = novaLinha.insertCell();
    celulaStatus.textContent = status;

    const celulaLancamentos = novaLinha.insertCell();
    celulaLancamentos.textContent = lancamentos; 

    const celulaProtocolo = novaLinha.insertCell();
    celulaProtocolo.textContent = protocolo; 

});

for (let i = 0; i < corpoDaTabela.rows.length; i++) {
    let linha = corpoDaTabela.rows[i];
    let rowData = [];

    for (let j = 0; j < linha.cells.length; j++) {
        const celula = linha.cells[j];
        rowData.push(celula.textContent);
    }

    console.log("linha " + (i + 1) + ": " + rowData.join(", "));
}