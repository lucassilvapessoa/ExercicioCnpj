export default function verifica(cnpj){
        let Cnpj =  cnpj.slice(0,12).split("").map(x=> Number(x))
        let arrayCnpjmultiplicadorPrimeiroDigito = [5,4,3,2,9,8,7,6,5,4,3,2]
        let arrayCpnjmultiplicadorSegundoDigito = [6,5,4,3,2,9,8,7,6,5,4,3,2]
        let resultado = [Cnpj.length]
        
        for(let i=0; i<Cnpj.length; i++){
        resultado[i] = Cnpj[i] * arrayCnpjmultiplicadorPrimeiroDigito[i]
        }
        let soma = (array)=>{
        return array.reduce((pre,atua)=>{
                return pre + atua
            },0)
        }
        let restoDivisao = (valor,divisor)=> valor % divisor
        let resultadoDiv = restoDivisao(soma(resultado),11)
        let primeiroDigito =   resultadoDiv < 2  ? 0 : 11 - resultadoDiv
        let numeroAdicionadoComPrimeiroDigito = Cnpj.slice(0,Cnpj.length)
        numeroAdicionadoComPrimeiroDigito.push(primeiroDigito)
        let arrayMultiplicacaoSegundoDIgito = [numeroAdicionadoComPrimeiroDigito.length]
        
        for(let i=0; i<numeroAdicionadoComPrimeiroDigito.length; i++){
            arrayMultiplicacaoSegundoDIgito[i] = arrayCpnjmultiplicadorSegundoDigito[i] * numeroAdicionadoComPrimeiroDigito[i]
        }
        let resultadoDivDOis =  restoDivisao(soma(arrayMultiplicacaoSegundoDIgito),11)
        let segundoDigito = resultadoDiv < 2 ? 0 : 11 - resultadoDivDOis
        let numeroFinal = numeroAdicionadoComPrimeiroDigito.slice(0,numeroAdicionadoComPrimeiroDigito.length)
        numeroFinal.push(segundoDigito)
        let stringFinal = numeroFinal.join('')
        return cnpj === stringFinal ? "cnpj correto" : "cnpj incorreto"           
    }
  

