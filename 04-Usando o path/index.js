const path = require("node:path");

const dir = "src";
const file = "app.js";

const fullpath = path.join("src", "scripts", "arquivos.js");

const fullpath2 = path.join(__dirname, dir, file);

const relativePath = path.join(".", dir, file);

console.log(fullpath);
console.log(fullpath2);
console.log(relativePath);

const relativePath2 = "../arquivos/relatorio.pdf"

const absolutePath = path.resolve(relativePath2)
console.log(absolutePath)

const fileName = path.basename(relativePath2)
console.log(fileName)

const ext = path.extname(absolutePath)
console.log(ext)