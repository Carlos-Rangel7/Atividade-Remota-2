let listaAlunos = ["Carlos", "Pedro", "Thiago", "Caue", "Samuel",]

for(let numero = 0; numero < listaAlunos.length; numero++) {
    console.log(numero)
    if(numero == 0){
        console.log("O numero eh Zero")
    } else if (numero % 2 == 0) {
        console.log(`O numero ${numero} eh Par`)

    } else if (numero % 2 == 1){
        console.log(`o numero ${numero} eh Impar`)
    }
}