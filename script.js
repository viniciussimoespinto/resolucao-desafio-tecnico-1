
let num = 10
let soma = 0

function calc(){
  if(num >= 0){
    for(let contador = 0; contador < num ; contador++){
      if(contador % 3 === 0 || contador % 5 === 0){
        soma += contador
      }
    }
    console.log( `A resposta é ${soma}`)
  }
  else{
    console.log('Valor incorreto, por favor digite um numero positivo!')
  }
}

calc()
