class Transportation{
    name;
    model;
    speed;
    wheel;

    constructor(name,model,speed,wheel){
        this.name = name;
        this.model = model;
        this.speed = speed;
        this.wheel = wheel;
    }


    Drive(){
        console.log(`${this.name} drive`)
    }
}




class Car extends Transportation{

    engine;

    constructor(name,model,speed,wheel,engine){
        super(name,model,speed,wheel)
        this.engine = engine;
    }

    Drift(){
        console.log(`${this.name} make Drift`)
    }

}


class Plane extends Transportation{

    engine;

    constructor(name,model,speed,wheel,engine){
        super(name,model,speed,wheel)
        this.engine = engine;
    }

    Fly(){
        console.log(`${this.name} to fly`)
    }

}


class Bus extends Transportation{

    engine;
    #busnumber = 120;
    
    set busnumber(num){
        this.#busnumber = Math.abs(num);
    }

    get busnumber(){
        return this.#busnumber;
    }

    constructor(name,model,speed,wheel,engine){
        super(name,model,speed,wheel)
        this.engine = engine;
    }

}


class Velo extends Transportation{

    constructor(name,model,speed,wheel){
        super(name,model,speed,wheel)
    }

    
    Mechanicalmovement(){
        console.log(`${this.name} mechanical movement`)
    }

}


class Moto extends Transportation{

    engine;

    constructor(name,model,speed,wheel,engine){
        super(name,model,speed,wheel)
        this.engine = engine;
    }

}



let car1 = new Car("C-300","Mercedes",300,4);

console.log(car1.name);
console.log(car1.model)
console.log(car1.speed)
console.log(car1.wheel)


let bus = new Bus("BakuBus","Hyundai",200,4);

bus.busnumber = 225;
console.log(bus.busnumber)