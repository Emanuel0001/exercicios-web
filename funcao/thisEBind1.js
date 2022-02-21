const pessoa ={
saudacao: 'bom dia',
falar(){
    console.log(this.saudacao)
}

}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const falar2 = pessoa.falar
falar2 ()