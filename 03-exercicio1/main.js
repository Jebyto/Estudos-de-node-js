const { createFile, updateFile, showFile, deleteFile } = require('./funcoes');


createFile("Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js.");
showFile();
updateFile("Conteúdo modificado!");
showFile();
deleteFile();