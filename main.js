function calcularRanking(vitorias, derrotas) {
    let total = vitorias - derrotas
    let nivel = ""

    if(total < 10) {
        nivel = "Ferro"
    } else if(total <= 20) {
        nivel = "Bronze"
    } else if(total <= 50) {
        nivel = "Prata"
    } else if(total <= 80) {
        nivel = "Ouro" 
    } else if (total <= 90) {
        nivel = "Diamante"
    } else if (total <= 100) {
        nivel = "Lendário"
    } else if (total > 100) {
        nivel = "Imortal"
    }
    return `O Herói tem saldo de ${total} vitórias e está no nível ${nivel}`
}

console.log(calcularRanking(101, 0))