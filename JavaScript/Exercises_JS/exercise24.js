//24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while

imprimeHelloWorld = (i=1) => {
    while(i<=11){
        console.log(`${i} - Hello World`)
        i++
    }
}

imprimeHelloWorld()

/*

GABARITO (Errado!)

function helloWorld () {
   let i = 0
    while (i < 11) {
        console.log("Hello World");
        i++
    }   
}

helloWorld()

*/