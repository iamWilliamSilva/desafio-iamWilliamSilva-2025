class AbrigoAnimais {

  constructor() {
    this.animais = [
      { nome: "Rex", especie: "cao", brinquedos: ["RATO", "BOLA"] },
      { nome: "Mimi", especie: "gato", brinquedos: ["BOLA", "LASER"] },
      { nome: "Fofo", especie: "gato", brinquedos: ["BOLA", "RATO", "LASER"] },
      { nome: "Zero", especie: "gato", brinquedos: ["RATO", "BOLA"] },
      { nome: "Bola", especie: "cao", brinquedos: ["CAIXA", "NOVELO"] },
      { nome: "Bebe", especie: "cao", brinquedos: ["LASER", "RATO", "BOLA"] },
      { nome: "Loco", especie: "jabuti", brinquedos: ["SKATE", "RATO"] }
    ]
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    let listaAnimais = ordemAnimais.split(",")
    let listaPessoa1 = brinquedosPessoa1.split(",")
    let listaPessoa2 = brinquedosPessoa2.split(",")
    let resultado = []
    let teste

    for (let animal of listaAnimais) {
      const foundAnimal = this.animais.find(a => a.nome === animal)
      if (!foundAnimal) {
        return { erro: "Animal inválido" }
      }
    }

    for (let nome in listaAnimais) {
      teste = this.temBrinquedosNaOrdem(listaAnimais[nome], listaPessoa1, listaPessoa2)

      switch (teste) {
        case 0:
          resultado.push(`${listaAnimais[nome]} - abrigo`)
          break
        case 1:
          resultado.push(`${listaAnimais[nome]} - pessoa 1`)
          break
        case 2:
          resultado.push(`${listaAnimais[nome]} - pessoa 2`)
          break
        default:
          resultado.push("Animal inválido")
      }
    }

    resultado.sort((a, b) => {
      let nomeA = a.split(" - ")[0]
      let nomeB = b.split(" - ")[0]
      return nomeA.localeCompare(nomeB)
    })

    return { lista: resultado }
  }

  procurandoBrinquedos(animalRecebido) {
    const foundAnimal = this.animais.find(a => a.nome === animalRecebido)

    if (foundAnimal !== undefined) {
      return foundAnimal.brinquedos
    } else {
      return null
    }
  }

  verificaSequencia(listaBrinquedo, brinquedos) {
    let indiceAnimal = 0

    for (let i = 0; i < listaBrinquedo.length; i++) {
      if (brinquedos[indiceAnimal] === listaBrinquedo[i]) {
        indiceAnimal++
      }
    }

    return indiceAnimal === brinquedos.length
  }

  temBrinquedosNaOrdem(nomeAnimais, listaBrinquedos1, listaBrinquedos2) {
    let brinquedos = this.procurandoBrinquedos(nomeAnimais)
    const animal = this.animais.find(a => a.nome === nomeAnimais)

    if (!animal) {
      return undefined
    }

    if (brinquedos === null) {
      return undefined
    } else {
      const pessoa1 = this.verificaSequencia(listaBrinquedos1, brinquedos)
      const pessoa2 = this.verificaSequencia(listaBrinquedos2, brinquedos)

      if (pessoa1 && pessoa2) {
        return 0
      } else if (pessoa1) {
        return 1
      } else if (pessoa2) {
        return 2
      } else {
        return 0
      }
    }
  }
}

export { AbrigoAnimais as AbrigoAnimais }

