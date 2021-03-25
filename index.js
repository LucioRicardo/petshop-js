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
        servicos: ['banho', 'tosa']
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

listarPets();

const vacinarPets = (nome) => {
    for(let pet of pets){
        if(pet.nome == nome){
            pet.vacinado = true;
            console.log(`O pet ${pet.nome} foi vacinado.`);
        }
    }
};

console.log();
vacinarPets();

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

console.log();
campanhaVacina();

//console.log(pet);