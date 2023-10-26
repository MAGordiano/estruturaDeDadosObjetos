class dadosHeroi{
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
        
    }

    ataque() {
        switch (this.type) {
          case "mago":
            return "magia"
            break;
          case "guerreiro":
            return "espada"
            break;
          case "monge":
            return "artes marciais"
            break;
          case "ninja":
            return "shuriken"
            break;
        }
    }

    atacar(){
        console.log(`O ${this.type} atacou usando ${this.ataque()}`)
    }
   
}   

heroi1 = new dadosHeroi()
heroi1.name = "Mestre dos magos"
heroi1.age = 98
heroi1.type = "mago"
heroi1.atacar()

heroi2 = new dadosHeroi("Hercules", 33, "guerreiro")
heroi2.atacar()