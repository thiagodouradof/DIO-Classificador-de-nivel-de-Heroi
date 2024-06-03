//estrutura pra receber dados do usuário
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//criação de váriaveis - Usuário pode digitar o nome e xp do Herói
readline.question('Digite o nome do herói:', nomeHeroi => {
    readline.question('Digite a experiência (XP) do herói:', xpHeroi => {
        xpHeroi = parseInt(xpHeroi, 10);
        let nivelHeroi;

        //vetor com as informações do herói
        let dadosHeroi = [nomeHeroi, xpHeroi];

        //verificação dos valores de xp para definir o nível do Herói
        if (xpHeroi < 1000) {
        nivelHeroi = 'Ferro';
        } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivelHeroi = 'Bronze';
        } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivelHeroi = 'Prata';
        } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        nivelHeroi = 'Ouro';
        } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivelHeroi = 'Platina';
        } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivelHeroi = 'Ascendente';
        } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivelHeroi = 'Imortal';
        } else {
        nivelHeroi = 'Radiante';
        }

        //imprime a mensagem desejada, com o nome e nivel do Herói
        console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
        
        // outro tipo de impressão que também retorna a mensagem desejada
        // console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
        readline.close();
    });
});
