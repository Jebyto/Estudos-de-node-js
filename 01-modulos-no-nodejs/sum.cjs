function sum(...numbers){
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

module.exports = sum;