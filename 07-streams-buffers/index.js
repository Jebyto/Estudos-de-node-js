const fs = require("node:fs");

//const streamleitura = fs.createReadStream("arquivo.txt")

const streamleitura = fs.createReadStream("imagem.png")

const buffer = []

streamleitura.on("data", (chunk) => {
    buffer.push(chunk)
    console.log("um chunk foi processado")
})

streamleitura.on("end", () => {
    console.log("buffer: \n", buffer)
    //const dadoCompletos = Buffer.concat(buffer).toString()
    //console.log("Dados lidos:\n", dadoCompletos)
})