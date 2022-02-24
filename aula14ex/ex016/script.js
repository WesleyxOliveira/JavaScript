function calcular() {
    var n1 = document.getElementById('inicio')
    var n2 = document.getElementById('fim')
    var n3 = document.getElementById('passo')
    var res = document.getElementById('res')
    var inicio = Number(n1.value)
    var fim = Number(n2.value)
    var passo = Number(n3.value)
    if (inicio == 0 || fim == 0) {        
        window.alert('Impossível contar')
    }else if (passo == 0) {
        window.alert('Passo inválido! Considerando PASSO 1.')
        passo = passo +=1
        res.innerHTML = ("<p>Contando: </p>")
        while (inicio <= fim) {
            res.innerHTML += (`${inicio} &#x1F449`)
            inicio = inicio += passo
        }
        res.innerHTML += ('&#x1F3C1')
    }else {
        res.innerHTML = ("<p>Contando: </p>")
        while (inicio <= fim) {
            res.innerHTML += (`${inicio} &#x1F449`)
            inicio = inicio += passo
        }
        res.innerHTML += ('&#x1F3C1')
    }
}

