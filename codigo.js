function contarNum() {
    const inContar = document.getElementById('inContar');
    const outresposta = document.getElementById('outresposta');

    var contar = Number(inContar.value)
    
    if (contar === 0 || isNaN(contar)) {
        alert('Coloque um número')
        return
    }
    var resposta = ""
    for (var i = 1; i <= contar; i++) {
        resposta = resposta + i + "\n"
    }

    outresposta.textContent = resposta


    
}

var ativar = document.getElementById('ativar')
ativar.addEventListener('click', contarNum);

function limpar() {
    location.reload()
}

 var resetar = document.getElementById('resetar');
 resetar.addEventListener('click', limpar);
