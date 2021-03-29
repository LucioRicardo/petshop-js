const nomeEmpresa = "PETSHOP AVANADE";
const fs = require('fs');
const moment = require('moment');
let bd = fs.readFileSync('./dadosPets.json', 'utf-8');

let listaPets = JSON.parse(bd);

const atualizarBanco = () => {
    fs.writeFileSync('./dadosPets.json', JSON.stringify(listaPets, null, 2), 'utf-8');
};

const listarPets = () => {
    for(let pet of listaPets.pets)
        console.log(`Nome: ${pet.nome}, Tipo: ${pet.tipo}, Raça: ${pet.raca}, Tutor: ${pet.tutor}, Vacinado?: ${pet.vacinado ? "Vacinado" : "Não Vacinado"}, Serviços: ${pet.servicos}.`);
};

const vacinarPet = nome => {
    for(let pet of listaPets.pets){
        if(pet.nome == nome){
            if(!pet.vacinado){
                pet.vacinado = true;
                console.log(`\nO pet ${pet.nome} foi vacinado.`);
            } else {
                console.log(`\n${pet.nome} já foi vacinado anteriormente.`)
            }
        }
    }

    atualizarBanco();

};

const campanhaVacina = () => {
    let petsVacinados = 0;
    for(let pet of listaPets.pets){
        if(!pet.vacinado){
            pet.vacinado = true;
            petsVacinados++;
            console.log(`\nO pet ${pet.nome} foi vacinado.`);
        }
    }

    atualizarBanco();
    console.log(`${petsVacinados} pets foram vacinados nessa campanha.`)

};

const adicionarMiAu = novoPet => {
        
    listaPets.pets.push(novoPet);
    atualizarBanco();

};

const darBanhoPet = nome => {
    for(let pet of listaPets.pets){
        if(pet.nome == nome){
            pet.servicos.push({
                'serviço':'banho',
                'data': moment().format('DD-MM-YYYY')
            });
            console.log(`\nO pet ${pet.nome} está de banho tomado!`);
        }
    }

    atualizarBanco();

};

const tosarPet = nome => {
    for(let pet of listaPets.pets){
        if(pet.nome == nome){
            pet.servicos.push({
                'serviço':'tosa',
                'data': moment().format('DD-MM-YYYY')
            });
            console.log(`\nO pet ${pet.nome} está com cabelinho na régua!`);
        }
    }

    atualizarBanco();

};

const apararUnhasPet = nome => {
    for(let pet of listaPets.pets){
        if(pet.nome == nome){
            pet.servicos.push({
                'serviço':'unhas aparadas',
                'data': moment().format('DD-MM-YYYY')
            });
            console.log(`\nO pet ${pet.nome} está de unhas aparadas!`);
        }
    }

    atualizarBanco();

};

const atenderCliente = (pet, servico) => {
    console.log("\nPor favor, aguarde. Logo você será atendido!")
    console.log("Serviço em execução...")
    servico(pet);

    atualizarBanco();

};


//listarPets();

//vacinarPet();

//campanhaVacina();

adicionarMiAu({ "nome" : "Ikky",
                "tipo" : "Gato",
                "idade" : 12,
                "raca" : "Vira-lata",
                "peso" : 16,
                "tutor" : "Himself",
                "vacinado" : true,
                "servicos" : [] }
);

listarPets();

atenderCliente('Costelinha', apararUnhasPet);

//listarPets();

//tosarPet("Coragem");

//darBanhoPet("Costelinha");

//apararUnhasPet("Satanás");
