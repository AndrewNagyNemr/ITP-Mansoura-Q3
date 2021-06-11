const fs = require("fs");

const todos = fs.readFileSync("./database.json", {encoding:"utf-8"});

const [,,arg1] = process.argv;

const parsedTodos = JSON.parse(todos);

switch (atg1) {
    case "get":
        
        break;

    case "add":
        
        break;

    case "delete":
        
        break;

    default:
        break;
}

