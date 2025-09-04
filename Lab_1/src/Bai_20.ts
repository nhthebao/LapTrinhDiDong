interface Vehicle {
  move(): void;
}

class Car implements Vehicle {
  move(): void {
    console.log("Car is moving");
  }
}

class Bike implements Vehicle {
  move(): void {
    console.log("Bike is moving");
  }
}
