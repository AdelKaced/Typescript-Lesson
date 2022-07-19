
let num = 24
let num2:number;
let num3: number | string

num = false; // expect a number
num2 = 'voco' // expect a number
num3 = 10 // expect a number or string


// declarer le type de donnée pour tous les éléments d'un tableau
let array: (number | boolean)[] = []

array.push(false)

// les objets peuvent configuer les objets de cette manière 
interface Player {
    id: number,
    name: string,
    jersey?: number  // le point d'interrogation permet de ne pas déclarer la clé de cette objet
}
const zidane:Player = {
    id: '0',
    name: 'Zidane',
    jersey: 10
}

const henry:Player = {
    id: 1,
    name: 'Henry',
}


class Singer {
    id: number;
    name: string;
    alive? : boolean
    constructor( id: number,name: string, alive? : boolean) {
        this.id = id,
        this.name = name, 
        this.alive = alive
    }
}

const prince = new Singer(0, 'Prince')

// les fonctions 

var sayMyName = (name: string) => {
    console.log('bonjour' + name);
    
}

sayMyName('adel')

const age = (age:number| string, size?: number):void => { // on ajoute void pour dire que l'on attend rien en retour de cette fonction
    if (size) {
        console.log(`la taille du capitaine est de ${size} cm et il est agé de : ${age} ans`);
    }
    else {
        console.log(`Le capitaine est agé de : ${age} ans`)
    }

}

age(22)

// Enum & Tuple 

enum Role {Admin, Premium, Basic}

interface User {
    name: string;
    attributes:[number, string],
    role: Role
}

const user1:User = {
    name: 'julien',
    attributes: [12,'top'],
    role: Role.Admin
}

if (user1.role === Role.Admin) {
    console.log(`the user has a role of ${Role.Admin}`);
    
}

