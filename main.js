const form = document.getElementById('form-contato')
const contato = [];

let linhas = "";

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (contato.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato} já foi inserido`);
    } else {
        contato.push(inputNomeContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha
    }
    inputNomeContato.value = ""
    inputTelefoneContato.value = ""
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
