function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

//module.exports = {
//    gets: gets, 
//    print: print
//};
//module.exports.gets = gets;



function sortear() {
    const alunos = 5;
    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
}

module.exports = {gets, print, sortear};

