const nomeEmpresa = "PETSHOP AVANADE";
const fs = require('fs');
const moment = require('moment');
let bd = fs.readFileSync('./dadosPets.json', 'utf-8');

let listaPets = JSON.parse(bd);

const atualizarBanco = () => {
    fs.writeFileSync('./dadosPets.json', JSON.stringify(listaPets, null, 2), 'utf-8');
};

const buscarPet = nome => {
    let encontrado = listaPets.pets.find(pet => pet.nome == nome);
        return encontrado;
};

const listarPets = () => {
    listaPets.pets.forEach(pet => {
        let {nome, tipo, raca, tutor, vacinado, servicos} = pet;
        console.log(`
        Nome: ${nome},
        Tipo: ${tipo},
        Raça: ${raca},
        Tutor: ${tutor},
        Vacinado?: ${vacinado ? "Vacinado" : "Não Vacinado"},
        Serviços: ${servicos}.
    `);
    });
};

const vacinarPet = nome => {
    pet = buscarPet(nome);
    if(!pet.vacinado){
        pet.vacinado = true;
        console.log(`\nO pet ${pet.nome} foi vacinado.`);
    } else {
        console.log(`\n${pet.nome} já foi vacinado anteriormente.`)
    }

    atualizarBanco();

};

const campanhaVacina = () => {
    let naoVacinados = listaPets.pets.filter(pet => pet.vacinado == false);
    naoVacinados.map(pet => vacinarPet(pet));
    console.log(`\n${naoVacinados.length} pets foram vacinados nessa campanha.`);
 
};

const adicionarMiAu = novoPet => {
        
    listaPets.pets.push(novoPet);
    atualizarBanco();

};

const darBanhoPet = nome => {
    pet = buscarPet(nome);
    pet.servicos.push({
            'serviço':'banho',
            'data': moment().format('DD-MM-YYYY')
        });
        console.log(`\nO pet ${pet.nome} está de banho tomado!`);

    atualizarBanco();

};

const tosarPet = nome => {
    pet = buscarPet(nome);
        pet.servicos.push({
            'serviço':'tosa',
            'data': moment().format('DD-MM-YYYY')
        });
        console.log(`\nO pet ${pet.nome} está com cabelinho na régua!`);

    atualizarBanco();

};

const apararUnhasPet = nome => {
    pet = buscarPet(nome);
        pet.servicos.push({
            'serviço':'unhas aparadas',
            'data': moment().format('DD-MM-YYYY')
        });
        console.log(`\nO pet ${pet.nome} está de unhas aparadas!`);

    atualizarBanco();

};

const atenderCliente = (pet, servico) => {
    console.log("\nOlá, seja MUITO BEM-VINDO!",
                "\nPor favor, aguarde. Logo você será atendido!",
                "\nServiço em execução..."
    );
    
    servico(pet);

    console.log("\nObrigado e até uma próxima!");

    atualizarBanco();

};

listarPets();

//vacinarPet("Costelinha");

//tosarPet("Coragem");

//atenderCliente('Satanás', apararUnhasPet);

//darBanhoPet("Snoopy");

//campanhaVacina();

//adicionarMiAu({ "nome" : "Ikky",
//                "tipo" : "Gato",
//                "idade" : 12,
//                "raca" : "Vira-lata",
//                "peso" : 16,
//                "tutor" : "Himself",
//                "vacinado" : true,
//                "servicos" : [] }
//);

//listarPets();
