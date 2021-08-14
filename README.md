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

## Steps to run the application

To start the express server, run the following

```bash
npm run start:dev
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.

## Steps to test the application

To run the tests, run the following

```bash
npm test
```

To see a report of all tests performed, run the following

```bash
npm run test:coverage
```

## Routes

### ANIMALS [http://localhost:3000](http://localhost:3000)

Shows all the animals that are registered in the DB (JSON).

![](https://raw.githubusercontent.com/ArianAngoma/node-animal-blog/main/screenshots/index.png)

### TOP 10 USERS OF ANIMAL [http://localhost:3000/user-by-animal?animal=cat](http://localhost:3000/user-by-animal?animal=cat)

Shows the 10 users who have the selected animal ordered by their points.

![](https://raw.githubusercontent.com/ArianAngoma/node-animal-blog/main/screenshots/users-by-animal.png)

### TOP 25 USER [http://localhost:3000/users](http://localhost:3000/users)

Muestra las 25 mejores usuarios ordenadas por sus puntos.
Option to create and delete a user from the DB (JSON).

![](https://raw.githubusercontent.com/ArianAngoma/node-animal-blog/main/screenshots/top-users.png)

### CREATE NEW USER [http://localhost:3000/new-user](http://localhost:3000/new-user)

You can create a new user by entering the corresponding data.

![](https://raw.githubusercontent.com/ArianAngoma/node-animal-blog/main/screenshots/create-new-users.png)