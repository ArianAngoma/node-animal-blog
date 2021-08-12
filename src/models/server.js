const express = require('express');
const morgan = require("morgan");
const exphbs = require('express-handlebars');
const path = require("path");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.path = {
            animals: '',
            usersByAnimal: '',
            users: ''
        }

        // Middlewares
        this.middlewares();

        // Rutas de la app
        this.routes();
    }

    middlewares() {
        // Morgan
        this.app.use(morgan('dev'));

        // Habilitar body-parser para leer datos del formulario
        this.app.use(express.urlencoded({extended: true}));

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio público
        this.app.use(express.static('public'));

        // Añadir carpetas de vistas
        this.app.set('views', path.join(__dirname, '../views'));

        // Habilitar vista
        this.app.engine('hbs', exphbs({
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs'
        }))

        this.app.set('view engine', 'hbs');
    }

    routes() {
        this.app.use(this.path.animals, require('../routes/animals'));
        this.app.use(this.path.usersByAnimal, require('../routes/users-by-animal'));
        this.app.use(this.path.users, require('../routes/users'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`)
        })
    }
}

module.exports = Server;