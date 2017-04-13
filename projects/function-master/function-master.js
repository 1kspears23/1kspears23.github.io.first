function objectValues(obj) {
    var values = [];
    for (var key in obj){
        values.push(obj[key]); 
    }return values;
}

const keysToString = (obj) => Object.keys(obj).join(' ');

function valuesToString(obj) {
    var string = '';
    for (var key in obj){
        if (typeof(obj[key]) === 'string'){
            string += obj[key] + " "; 
        }
    } //return Object.keys(obj[key]).join(' ');
return string.slice(0,-1)
    
}

const arrayOrObject = (input) => {
    if (Array.isArray(input) === true)
    return "array";
    if (typeof(input) === "object")
    return "object";
    
};

const capitalizeWord = (string) =>{
    return string[0].toUpperCase() + string.slice(1);
};

const capitalizeAllWords = (string) => {
   var strings = string.split(" ");
    for (var  i= 0; i < strings.length; i++){
       strings[i]=   capitalizeWord(strings[i]);
    }
    return strings.join(" ");
};

const welcomeMessage = (obj) => {
    return "Welcome " + capitalizeWord(obj.name) + "!";
};

const profileInfo = (object) => {
    return capitalizeWord(object.name) +" is a " + capitalizeWord(object.species);
}


const maybeNoises = (obj) => {
    if(!obj.noises || obj.noises.length===0){
        return "there are no noises";
    }
        
    return obj.noises.join(" ");
};


const hasWord = (stringOfWords, words) => {
    if (stringOfWords.includes(words) === true){
        return true;
    }
    if (stringOfWords.includes(words ) !== true){
        return false;
    }
};

const addFriend = (name, obj) => {
    obj.friends.push(name);
    return obj; 
};
const isFriend = (name, obj) => {
    if (!obj.friends){
        return false;
    }
    for (let i = 0; i < obj.friends.length ; i++){
        if (name === obj.friends[i]){
            return true;
        }
    }
    return false;
};


const nonFriends = (name, people) => {
    var namedPerson;
    for(var i = 0 ; i < people.length; i++){
        if (name === people[i].name){
            namedPerson = people[i];
        }
    }
    var out = [];
    for(var j = 0; j < people.length; j++){
        if(people[j].name === name)continue; 
        if(namedPerson.friends.indexOf(people[j].name ) ){
            out.push(people[j].name);
        }
    }
    return out;
}

const updateObject = (obj, key, value) => {
    obj[key]= value
}
const removeProperties = (obj) => {
    
}
const dedup = (obj) => {
    
}