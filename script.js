function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  var lorenzo = new Person("lorenzo", 25, "male");
  
  Person.prototype.greetings = function() {
    console.log(this.name);
  };
  
  function Teacher(name, age, gender, subject) {
    Person.call(this, name, age, gender);
  
    this.subject = subject;
  }
  
  Teacher.prototype = Object.create(Person.prototype);
  
  Teacher.prototype.constructor = Teacher;
  
  var rizzo = new Teacher("fabrizio", 28, "male", "javascript");
  
  // rizzo.greetings();
  // lorenzo.greetings();
  function Animal(name, numberOfPaws, hasHairy, age, gender) {
    this.name = name;
    this.numberOfPaws = numberOfPaws;
    this.hasHairy = hasHairy;
    this.age = age;
    this.gender = gender;
  }
  
  //vogliamo mettere un metodo per dire se l'animale cammina su 2 o 4 zampe
  Animal.prototype.isBipede = function() {
    return this.numberOfPaws === 2;
  };
  
  //vogliamo mettere un metodo per dire se l'animale cammina su 2 o 4 zampe
  // function isBipede(animal) {
  //   return animal.numberOfPaws === 2;
  // }
  
  var animal = new Animal("Luna", 4, true, 10, "female");
  
  function Dog(name, hasHairy, age, gender, race = "shitzu") {
    Animal.call(this, name, 4, hasHairy, age, gender);
  
    this.race = race;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  
  Dog.prototype.constructor = Dog;
  
  var luna = new Dog("Luna", true, 10, "female");
  
  function Giraffe(name, age, gender, neckLength) {
    Animal.call(this, name, 4, true, age, gender);
  
    this.hasLongNeck = true;
    this.neckLength = neckLength;
  }
  
  Giraffe.prototype = Object.create(Animal.prototype);
  
  Giraffe.prototype.constructor = Giraffe;
  
  Giraffe.prototype.isLongerThan = function(giraffe) {
    return (
      this.name +
      " ha il collo più " +
      (this.neckLength > giraffe.neckLength
        ? "lungo di " + giraffe.name
        : "corto di " + giraffe.name)
    );
  };
  
  var giraffe1 = new Giraffe("Linda", 40, "female", 8.5);
  var giraffe2 = new Giraffe("Matilda", 50, "female", 12);


  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------
/*

  function Vehicle(hasEngine, numberOfWheels, color, model) {
      this.hasEngine = hasEngine;
      this.numberOfWheels = numberOfWheels;
      this.color = color;
      this.model = model;
  }

  var vehicle = new Vehicle(true, 4, 'red', 'Mazda');

  Vehicle.prototype.printColor = function () {
      console.log(this.color);
  };

  vehicle.printColor();

  function Car(color, model, numberOfDoors) {
      Vehicle.call(this, true, 4, color, model)

      this.numberOfDoors = numberOfDoors;
  }

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.constructor = Car;

var car = new Car("black", "Toyota", 5);

Vehicle.prototype.hasFourWheels = function() {
    return console.log(this.numberOfWheels === 4 ? "Ha 4 ruote" : "Non ha 4 ruote");  
    }
vehicle.hasFourWheels();

function Bike(hasEngine,color,model) {
    Vehicle.call(this, hasEngine, 2, color, model, 0)
}


------------------------------------------------------------------*/



class Vehicle {
    constructor(type, hasEngine, numberOfWheels, color, model) {
        this.type = type;
        this.hasEngine = hasEngine;
        this.numberOfWheels = numberOfWheels;
        this.color = color;
        this.model = model;
    }
}

var vehicle = new Vehicle('vettura',true, 4, 'red', 'Mazda');

Vehicle.prototype.printColor = function () {
    return this.color;
};

console.log(vehicle.printColor());

class Car extends Vehicle {
    constructor(color, model, numberOfDoors) {
        super("macchina" ,true, 4, color, model);
    
        this.numberOfDoors = numberOfDoors;
    }
}

var car = new Car("black", "Toyota", 5);

Vehicle.prototype.hasFourWheels = function() {
  return "Questa " + this.type + (this.numberOfWheels === 4 ? " ha 4 ruote" : " non ha 4 ruote"); 
}

console.log(car.hasFourWheels());


class Bike extends Vehicle {
    constructor(hasEngine, color, model) {
        super("bicicletta", hasEngine, 2, color, model, 0);
    }
}

var myBike = new Bike(false, "yellow", "graziella");

console.log(myBike.hasFourWheels());


class Motorbike extends Vehicle {
    constructor(numberOfWheels, color, model) {
        super("motocicletta", true, numberOfWheels, color, model)
    }
}

var myMotorbike = new Motorbike(2, 'green', 'kawasaki')

console.log(myMotorbike.printColor());