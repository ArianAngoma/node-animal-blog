const Animals = require("../models/user");

const getUsersByAnimal = async (req, res) => {
    const {animal} = req.query;

    let users = [];
    const user = new Animals();

    // Recorrer el arreglo user para poder agregar los usuarios que tengan el animal
    for (let u of user.users) {
        // Insertar todos los usuarios que correspondan al animal
        if (u.animals.includes(animal)) users.push(u);
    }

    console.log(users);
    res.render('users', {
        users,
        animal
    });
}

module.exports = {
    getUsersByAnimal
}