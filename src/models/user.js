const fs = require('fs');

class User {
    file = './src/db/users.json';

    constructor() {
        this.users = [];
        this.readDB();
    }

    readDB() {
        if (!fs.existsSync(this.file)) return [];
        const info = fs.readFileSync(this.file, {encoding: 'utf-8'})
        const data = JSON.parse(info);
        this.users = data.users;
    }
}

module.exports = User;