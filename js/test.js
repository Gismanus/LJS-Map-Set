let set = new Set();
let john = {name: 'John'};
let pete = {name: 'Pete'};
let mary = {name: 'Mary'};

set.add(john);
set.add(mary);
set.add(pete);
set.add(mary);
set.add(john);

for (let user of set){
    console.log(user.name);
}

