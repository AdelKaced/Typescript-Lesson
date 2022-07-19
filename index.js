"use strict";
var num = 24;
var num2;
var num3;
num = false; // expect a number
num2 = 'voco'; // expect a number
num3 = 10; // expect a number or string
// declarer le type de donnée pour tous les éléments d'un tableau
var array = [];
array.push(false);
var zidane = {
    id: '0',
    name: 'Zidane',
    jersey: 10
};
var henry = {
    id: 1,
    name: 'Henry',
};
var Singer = /** @class */ (function () {
    function Singer(id, name, alive) {
        this.id = id,
            this.name = name,
            this.alive = alive;
    }
    return Singer;
}());
var prince = new Singer(0, 'Prince');
// les fonctions 
var sayMyName = function (name) {
    console.log('bonjour' + name);
};
sayMyName('adel');
var age = function (age, size) {
    if (size) {
        console.log("la taille du capitaine est de " + size + " cm et il est ag\u00E9 de : " + age + " ans");
    }
    else {
        console.log("Le capitaine est ag\u00E9 de : " + age + " ans");
    }
};
age(22);
// Enum & Tuple 
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Premium"] = 1] = "Premium";
    Role[Role["Basic"] = 2] = "Basic";
})(Role || (Role = {}));
var user1 = {
    name: 'julien',
    attributes: [12, 'top'],
    role: Role.Admin
};
if (user1.role === Role.Admin) {
    console.log("the user has a role of " + Role.Admin);
}
