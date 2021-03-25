const nomeEmpresa = "PETSHOP AVANADE";

let pets = [
    {
        nome: 'Costelinha', 
        tipo: 'Cachorro',
        idade: 5,
        raca: 'Vira-lata',
        peso: 3,
        tutor: 'Doug Funny',
        vacinado: false,
        servicos: ['tosa']
    },
    {
        nome: 'Coragem',
        tipo: 'Cachorro',
        idade: 8,
        raca: 'Vira-lata',
        peso: 5,
        tutor: 'Muriel',
        vacinado: false,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Snoopy',
        tipo: 'Cachorro',
        idade: 12,
        raca: 'Beagle',
        peso: 5,
        tutor: 'Charlie Brwon',
        vacinado: true,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Satanás',
        tipo: 'Gato',
        idade: 6,
        raca: 'Vira-lata',
        peso: 5,
        tutor: 'Bruxa do 71',
        vacinado: false,
        servicos: ['banho', 'tosa', 'manicure']
    }
];

const listarPets = () => {
    for(let pet of pets)
        console.log(`O nome do pet é: ${pet.nome}.`);
};

const vacinarPet = (nome) => {
    for(let pet of pets){
        if(pet.nome == nome){
            pet.vacinado = true;
            console.log(`O pet ${pet.nome} foi vacinado.`);
        }
    }
};

const campanhaVacina = () => {
    let petsVacinados = 0;
    for(let pet of pets){
        if(pet.vacinado == false){
            pet.vacinado = true;
            petsVacinados++;
            console.log(`O pet ${pet.nome} foi vacinado.`);
        }
    }
};

const novoCliente = (nome, tipo, idade, raca, peso, tutor, vacinado, servicos) => {
    pets.push({nome: nome, tipo: tipo, idade: idade, raca: raca, peso: peso, tutor: tutor, vacinado: vacinado, servicos});
};

const darBanhoPet = (nome) => {
    for(let pet of pets){
        if(pet.nome == nome){
            pet.servicos.push("banho");
            console.log(`O pet ${pet.nome} está de banho tomado!`);
        }
    }
};

const tosarPet = (nome) => {
    for(let pet of pets){
        if(pet.nome == nome){
            pet.servicos.push("tosa");
            console.log(`O pet ${pet.nome} está com cabelinho na régua!`);
        }
    }
};

const apararUnhasPet = (nome) => {
    for(let pet of pets){
        if(pet.nome == nome){
            pet.servicos.push("aparar unhas");
            console.log(`O pet ${pet.nome} está de unhas aparadas!`);
        }
    }
};


listarPets();

console.log();
vacinarPet();

console.log();
campanhaVacina();

console.log();
novoCliente("Elsa", "Cachorro", 5, "Poodle", 5, "Lucio", true);

console.log();
listarPets();

console.log();
tosarPet("Coragem");

console.log();
darBanhoPet("Costelinha");

console.log();
apararUnhasPet("Satanás");