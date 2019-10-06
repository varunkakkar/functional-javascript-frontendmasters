const jobs = {
    "cars": [
        {
            name: "Ford Mustang",
            color: "black"
        }, {
            name: "Ford GT",
            color: "red"
        }
    ]
};

for(let key in jobs.cars){
    
    if(jobs.cars[key].color === "red"){
        jobs.cars[key].done = true;
    } else {
        jobs.cars[key].done = false;
    }
    console.log(jobs.cars[key]);
}

for(i=0;i<jobs.cars.length;i++){
    var car = jobs.cars[i];
    if(car.color === "black"){
        car.cost = 6789;
    } else {
        car.cost = 456;
    }
    console.log(car)
}

jobs.cars.forEach(car => {
    if(car.color === "red"){
        car.dispatched = true;
    } else {
        car.dispatched = false;
    }
    console.log(car)
})

