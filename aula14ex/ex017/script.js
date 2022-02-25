function gerar() {
    var n = document.getElementById('entrada')
    var tab = document.getElementById('tabuada')
    var um = document.getElementById('um')
    var numero = Number(n.value)
    um.innerHTML = (`${numero} x 1 = ${numero*1}`)
    dois.innerHTML = (`${numero} x 1 = ${numero*2}`)
}