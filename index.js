const nomeEmpresa = "PETSHOP AVANADE";

let pets = [
    {
        nome: 'Costelinha', 
        tipo: 'Cachorro',
        idade: 5,
        raca: 'Vira-lata',
        peso: 3,
        tutor: 'Doug Funny',
        vacinado: true,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Coragem',
        tipo: 'Cachorro',
        idade: 8,
        raca: 'Vira-lata',
        peso: 5,
        tutor: 'Muriel',
        vacindo: true,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Snoopy',
        tipo: 'Cachorro',
        idade: 12,
        raca: 'Beagle',
        peso: 5,
        tutor: 'Charlie Brwon',
        vacindo: true,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Satanás',
        tipo: 'Gato',
        idade: 6,
        raca: 'Vira-lata',
        peso: 5,
        tutor: 'Bruxa do 71',
        vacindo: true,
        servicos: ['banho', 'tosa', 'manicure']
    }
];

const listarPets = () => {
    for(let i = 0; i < pets.length; i++)
        console.log(pets[i].nome);
};

listarPets();

//console.log(pet);