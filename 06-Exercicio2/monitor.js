const os = require("node:os");
const fs = require("node:fs");
const path = require("node:path");

const systemPlatformMap = {
    "win32": "Windows",
    "linux": "Linux",
    "darwin": "MacOS",
    "freebsd": "FreeBSD"
}

function uptimeConvert() {

    const time = os.uptime();

    const uptimeDays = Math.floor(time / 60 / 60 / 24)
    const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60

    const uptimeHours = Math.floor((time - uptimeDaysInSeconds) / 60 / 60)
    const uptimeHoursInSeconds = uptimeHours * 60 * 60

    const uptimeMins = Math.floor((time - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
    const uptimeMinsInSeconds = uptimeMins * 60

    const uptimeSecs = Math.floor(time - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)

    const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`

    return uptime
}

function getSystemInfo() {

    const system = systemPlatformMap[os.platform()];
    const arch = os.arch();
    const cpu = os.cpus()[0].model;

    const uptime = uptimeConvert();

    const ramTotal = (os.totalmem() / (1024 ** 3)).toFixed(2);
    const ramUsage = ((os.totalmem() - os.freemem()) / (1024 ** 3)).toFixed(2);
    const ramUsagePercent = ((ramUsage / ramTotal) * 100).toFixed(2);

    return { system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent }

}

function printLog({ system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent }) {


    console.clear();
    console.log("Detalhes do sistema");
    console.log("Sistema Operacional: ", system);
    console.log("Arquitetura: ", arch);
    console.log("Modelo do Processador: ", cpu);
    console.log("Tempo de atividade do sistema: ", uptime);
    console.log(`Uso de memoria RAM: ${ramUsage}GB / ${ramTotal}GB (${ramUsagePercent}%)`);
}

function saveLog({ system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent }) {
    const logContent = `DETALHES DO SISTEMA | Sistema Operacional: ${system} | Arquitetura: ${arch} | Modelo do Processador: ${cpu} | Tempo de Atividade do Sistema: ${uptime} | Uso de Memória RAM: ${ramUsage} GB / ${ramTotal} GB (${ramUsagePercent} %)\n---\n`;

    const logDir = path.join("/", "log");

    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    const logFilePath = path.join(logDir, "log.txt");
    fs.appendFileSync(logFilePath, logContent);
}

setInterval(() => {
    const sysInfo = getSystemInfo();
    printLog(sysInfo);
    saveLog(sysInfo);

}, (1000));