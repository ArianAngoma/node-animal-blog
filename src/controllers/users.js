const short = require('short-uuid')

const Animals = require("../models/user");

const getUsers = async (req, res) => {
    let users = [];
    const user = new Animals();

    // Reccorrer el arreglo
    for (let u of user.users) {
        users.push(u);
    }

    // Ordenar usuarios por points
    users.sort((a, b) => {
        if (a.points > b.points) return -1;
        if (a.points < b.points) return 1;
        return 0;
    });

    // Filtrar usuarios activos
    const isActiveUser = users.filter(u => u.isActive === true);

    // Obtener los 25 primero usuarios
    const topUsers = isActiveUser.slice(0, 25);

    res.render('users', {
        users: topUsers
    })
}

const viewNewUser = (req, res) => {
    res.render('new-user');
}

const createNewUser = (req, res) => {
    const {name, surname, age, points, animals} = req.body;
    const users = new Animals();
    const user = {
        id: short.generate(),
        name: {
            given: name,
            surname
        },
        age,
        points,
        animals,
        isActive: true
    }

    // Guardar en la DB (Json)
    users.addUser(user)

    res.redirect('users');
}

const deleteUser = async (req, res) => {
    const users = new Animals();
    await users.deleteUser(req.params.id);
    res.redirect('/users');
}

module.exports = {
    getUsers,
    viewNewUser,
    createNewUser,
    deleteUser
}