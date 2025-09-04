class Animal {
  speak(): void {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof");
  }
}

class Cat extends Animal {
  meow(): void {
    console.log("Meow");
  }
}
