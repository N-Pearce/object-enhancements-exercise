// Same Keys and Values
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

// Computed Property Names
let favoriteNumber = 42;

const instructor = {
    firstName : 'John',
    [favoriteNumber] : "that's my favorite!"
}

// Object Methods
const instructor2 = {
    firstName : "Charlie",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return `${this.firstName} says bye!`
    }
}

const createAnimal = (species, verb, noise) => ({
    species,
    [verb](){
        return noise;
    }
})

const p = createAnimal('pig', 'snort', 'schnshnaaaaa')