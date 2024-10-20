console.clear();

function User(name, age){
    this.name=name,
    this.age=age
}

function printUser(city, state){
    console.log(this.name, this.age, city, state);
}


// function call 

const u1 = new User("Stanley", 26);
printUser.call(u1, "Bidar", "Karnataka");

// function apply 

const u2 = new User("Uday", 23);
printUser.apply(u2, ["Hyderabad", "Telanagana"]);


// function bind 

const u3 = new User("Omkar", 25);

const bindFunction = printUser.bind(u3, "Mumbai", "Maharashtra");

bindFunction();
