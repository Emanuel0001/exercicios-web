class lancamento{
    constructor(nome = 'Genérico', valor = 0)
{
    this.nome = nome
    this.valor = valor
}

} 
class CicloFinanceiro {
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }
    addlancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))

    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const salario = new lancamento('salario', 45000)
const contaDeLuz = new lancamento (  'Luz', -220)

const contas = new CicloFinanceiro(6,2018)
contas.addlancamentos(salario,contaDeLuz)
console.log(contas.sumario())
