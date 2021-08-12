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

    console.log(topUsers);

    res.render('users',{
        users: topUsers
    })
}

const viewNewUser = (req, res) => {
    res.render('new-user');
}

const createNewUser = (req, res) => {
    console.log(req.body);
    res.send('Holasd')
}

module.exports = {
    getUsers,
    viewNewUser,
    createNewUser
}