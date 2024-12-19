
class Animal {

    constructor(name) {
      this.name = name;
    }
  

    move() {
      console.log(`${this.name} is moving.`);
    }
  }
  
  
  class Bird extends Animal {
 
    move() {
      console.log(`${this.name} is flying.`);
    }
  }
  

  class Fish extends Animal {

    move() {
      console.log(`${this.name} is swimming.`);
    }
  }
  

  class Car {

    static drive() {
      console.log("The car is driving. Vroom vroom!");
    }
  }
  

  const sparrow = new Bird("Sparrow"); 
  sparrow.move(); 
  
  const goldfish = new Fish("Goldfish"); 
  goldfish.move(); 
  
  Car.drive(); 
  