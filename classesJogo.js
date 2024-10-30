const tiposAtaque = {

    Mago: "Magia",
  
    Monge: "Artes Marciais",
  
    Ninja: "Shuriken",
  
    Guerreiro: "Espada",
  
  };
  
class Hero{
  
    constructor(nome, idade, tipo){
  
      this.nome = nome;
  
      this.idade = idade;
  
      this.tipo = tipo;
  
    }
  
    attack (){
  
      console.log(`o ${this.tipo} atacou usando ${tiposAtaque[this.tipo]} \n`);
  
      
  
    } 
  
  }