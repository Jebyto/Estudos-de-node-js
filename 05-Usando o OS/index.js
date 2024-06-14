const os = require("node:os");

const platform = os.platform();

console.log("plataforma do SO: ", platform);

const arch = os.arch();

console.log("Arquitetura do SO: ", arch);

const cpus = os.cpus();

console.log("Informações cpu: ", cpus.length);

const mem = os.totalmem();

console.log("Memoria: ", mem / 1024 / 1024 / 1024, "GB");