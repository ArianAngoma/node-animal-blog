const Animals = require("../models/user");

const getAnimals = async (req, res) => {
    let animals = [];
    const users = new Animals();

    // Recorrer el arreglo de objetos
    for (let user of users.users) {
        // Insertar todos los animales en el arreglo animals
        user.animals.forEach(e => {
            animals.push(e);
        });
    }

    // Convertir el arreglo animals en un Set para que asi se elimine los repetidos
    const listAnimals = new Set(animals);

    // Convertir el Set en arreglo con los nuevos elementos
    animals = [...listAnimals];

    res.render('index', {
        animals
    });
}

module.exports = {
    getAnimals
}