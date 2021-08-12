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

    // Ordenar usuarios por points
    users.sort((a, b) => {
        if (a.points > b.points) return -1;
        if (a.points < b.points) return 1;
        return 0;
    })

    // Obtener los 10 primero usuarios
    const shortUser = users.slice(0, 10);

    res.render('users', {
        users: shortUser,
        animal
    });
}

module.exports = {
    getUsersByAnimal
}