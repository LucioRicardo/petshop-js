const nomeEmpresa = "PETSHOP AVANADE";
const fs = require('fs');
const moment = require('moment');
const dadosPets = require('./dadosPets.json');

let listaPets = dadosPets;

const listarPets = () => {
    for(let pet of listaPets)
        console.log(`Nome: ${pet.nome}, Tipo: ${pet.tipo}, Raça: ${pet.raca}, Tutor: ${pet.tutor}, Vacinado?: ${pet.vacinado ? "Vacinado" : "Não Vacinado"}, Serviços: ${pet.servicos}.`);
};

const vacinarPet = nome => {
    for(let pet of listaPets){
        if(pet.nome == nome){
            if(!pet.vacinado){
                pet.vacinado = true;
                console.log(`\nO pet ${pet.nome} foi vacinado.`);
            } else {
                console.log(`\n${pet.nome} já foi vacinado anteriormente.`)
            }
        }
    }
};

const campanhaVacina = () => {
    let petsVacinados = 0;
    for(let pet of listaPets){
        if(!pet.vacinado){
            pet.vacinado = true;
            petsVacinados++;
            console.log(`\nO pet ${pet.nome} foi vacinado.`);
        }
    }
    console.log(`${petsVacinados} pets foram vacinados nessa campanha.`)
};

const novoCliente = (nome, tipo, idade, raca, peso, tutor, vacinado, servicos) => {
    let novoPet = {
        nome: nome,
        tipo: tipo,
        idade: idade,
        raca: raca,
        peso: peso,
        tutor: tutor,
        vacinado: vacinado,
        servicos: servicos
    };
    
    listaPets.push(novoPet);

    fs.writeFile('./dadosPets.json', JSON.stringify(listaPets), 'utf8', (erro) => {

        if (erro) {
            console.log(`\nAlgo deu errado: ${erro}`);
        } else {
            console.log(`\nPet inserido com sucesso!`);
        }
    
    });
};

const darBanhoPet = nome => {
    for(let pet of listaPets){
        if(pet.nome == nome){
            pet.servicos.push({
                'serviço':'banho',
                'data': moment().format('DD-MM-YYYY')
            });
            console.log(`\nO pet ${pet.nome} está de banho tomado!`);
        }
    }
};

const tosarPet = nome => {
    for(let pet of listaPets){
        if(pet.nome == nome){
            pet.servicos.push({
                'serviço':'tosa',
                'data': moment().format('DD-MM-YYYY')
            });
            console.log(`\nO pet ${pet.nome} está com cabelinho na régua!`);
        }
    }
};

const apararUnhasPet = nome => {
    for(let pet of listaPets){
        if(pet.nome == nome){
            pet.servicos.push({
                'serviço':'unhas aparadas',
                'data': moment().format('DD-MM-YYYY')
            });
            console.log(`\nO pet ${pet.nome} está de unhas aparadas!`);
        }
    }
};

const atenderCliente = (pet, servico) =>{
    console.log("Por favor, aguarde. Logo você será atendido!")
    console.log("Serviço em execução...")
    servico(pet);
};


//listarPets();

//vacinarPet();

//campanhaVacina();

//novoCliente("Ikky", "Gato", 12, "Vira-lata", 16, "Himself", true);

listarPets();

atenderCliente('Costelinha', apararUnhasPet);

//listarPets();

//tosarPet("Coragem");

//darBanhoPet("Costelinha");

//apararUnhasPet("Satanás");
