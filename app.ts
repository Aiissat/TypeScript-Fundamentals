// Define the Vehicle interface
interface Vehicule {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Implement the Car class
  class car implements Vehicule {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  const mycar = new Car("BMW", "M5", 2022);
  myCar.start();
  