const fs = require("node:fs");

function createFile(content) {
    try {
        fs.writeFileSync("./arquivo.txt", content, "utf-8");
        console.log("Arquivo criado");
    }
    catch (err) {
        console.log(err);
    }
}

function updateFile(content) {
    const exist = fs.existsSync("./arquivo.txt");

    if (exist) {
        try {
            fs.writeFileSync("./arquivo.txt", content, "utf-8");
            console.log("Arquivo atualizado");
        }
        catch (err) {
            console.log(err);
        }
    }
}

function showFile() {
    const exists = fs.existsSync("./arquivo.txt");

    if (exists) {
        try {
            const data = fs.readFileSync("./arquivo.txt", "utf-8");
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    } else {
        console.log("O arquivo não existe!");
    }
}

function deleteFile() {
    try {
        fs.unlinkSync("arquivo.txt");
        console.log("Arquivo excluído com sucesso!");
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createFile,
    updateFile,
    showFile,
    deleteFile
};