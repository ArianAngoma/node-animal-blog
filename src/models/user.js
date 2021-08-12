const fs = require('fs');

class User {
    file = './src/db/users.json';

    constructor() {
        this.users = [];
        this.readDB();
    }

    deleteUser(id) {
        this.users = this.users.filter(user => user.id !== id);
        this.saveDB();
    }

    addUser(user) {
        this.users.push(user);
        this.saveDB();
    }

    saveDB() {
        const load = {
            users: this.users
        }
        fs.writeFileSync(this.file, JSON.stringify(load));
    }

    readDB() {
        if (!fs.existsSync(this.file)) return [];
        const info = fs.readFileSync(this.file, {encoding: 'utf-8'})
        const data = JSON.parse(info);
        this.users = data.users;
    }
}

module.exports = User;