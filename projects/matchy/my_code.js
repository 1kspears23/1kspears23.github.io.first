
var animal = {}; 
animal.species  = "rabbit";
animal ["name"] = "jessica";
animal.noises = [];
console.log(animal);

var noises = []; 
noises[0] = "chomp";
noises.push("grr");
noises.unshift("grump");
noises [noises.length]= "nibble";
console.log (noises.length);
console.log (noises[noises.length-1]);
console.log (noises);

animal['noises'] = noises; 
noises.push("ughm"); 
console.log(animal);

// to access an array's properties you can reach is using dot syntex or bracket syntax
// bracket notation and the element's id

var animals = []; 
animals.push(animal); 
console.log(animals);
var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);
var badger = { species: 'badger', name: 'mick', noises: ['hiss', 'slink', 'growl', 'clapper'] };
var lion = { species: 'lion', name: 'capper', noises: ['roar', 'jazz hands', 'meow', 'boo'] };
animals.push(badger);
animals.push(lion);
console.log(animals); 
console.log(animals.length);
//im choosing an array because its going to hold a group of objects
var friends = []; 
function getFriends (animals) {
    return Math.floor(Math.random() * (animals.length -0)) + 0;
}

console.log(getFriends(animals));
friends.push(animals[(getFriends(animals))].name);
console.log(friends);
duck ['friends'] = friends; 



function search(name){
    for (var i = 0; i < animals.length; i++){
        if (name.toLowerCase() === animals[i].name.toLowerCase()){
            return animals[i];
           
        } 
    }return null;
}

function edit(name, animal) {
    for(var i = 0; i < animals.length; i++) {
        if (name === animals[i].name){
            return (animals[i] = animal);
        }
    }
}



function remove(info) {
    for (var i = 0; i < animals.length; i++){
        if (info.toLowerCase() === animals[i].name.toLowerCase()) {
            return animals.splice(i,1);
            
        }
    }
}

function create(object) {
    if (object.name.length > 0 && object.species.length > 0) {
            for (var i = 0; i < animals.length; i++){
                if (object.name !== animals[i].name){
                    return animals.push(object)
                
            }
        }
    }

    
    
} 
