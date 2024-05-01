// Aula 4
// as reticências junto ao parâmetro 'params' significa que é para ser acessado TODOS os parâmetros(itens que estão nesta função) dentro desta função
function logaItens(...params) {
    const [ primeiro ] = params; // com o '[ primeiro ]' eu vou acessar o PRIMEIRO item deste ARRAY da minha função
    console.log(primeiro);
}
logaItens(1, 2, 3, 4);


function logaDois(items) {
    const [ primeiro, segundo ] = items;

    console.log(segundo);
}
logaDois([3, 7, 22]); // aqui precisa ser colocado os colchetes '[]' para ser acessado o segundo item da minha array desta função


// FUNÇÕES ASSÍCRONAS
// console.log('antes')

// setTimeout(() => {
//     console.log('testando')
// }, 1500);

// console.log('depois') /* esses 'antes' e 'depois' são para mostrar que, por conta de eu ter definido um tempo nesta função do 'setTimeout', vai ser colocado no console primeiro os itens que estão fora deste 'setTimeout' */

async function logAssincrono() {
    console.log('antes')
    await new Promise(function (resolve, reject)/* resolve e reject são FUNÇÕES, e funções PODEM receber funções */ {
         setTimeout(() => {
            console.log('testando')
            resolve(true);
        }, 1500)
    })
    
    console.log('depois')
}
logAssincrono()// a função precisa ser sempre chamado fora dela, a não ser que seja uma função Recursiva, e isso não aprendemos ainda!!