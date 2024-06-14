const args = process.argv

//console.log(`Argumentos informados:`);
//console.log(args)

const namedArgs = {};

process.argv.slice(2).forEach((arg, index, array) => {
    if(arg.startsWith("--")){
        const paramName = arg.slice(2);
        const argValue = array[index + 1];
        namedArgs[paramName] = argValue;
    }
})

console.log(namedArgs);