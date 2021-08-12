## Animal Blog - Nodejs App

First of all, thank you for giving me the opportunity to be part of the selection process.

The animal blog app made with node js and the handlebars template engine:

- Interact with a json file simulating a database and display it in the view.
- Use of the latest ES6 features like classes, object and array destructuring, etc.
- Show, add and remove content from database (json).

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/ArianAngoma/node-animal-blog
cd node-animal-blog
```

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm run start:dev
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.


## Routes

### ANIMALS [http://localhost:3000](http://localhost:3000)

Shows all the animals that are registered in the DB (JSON).