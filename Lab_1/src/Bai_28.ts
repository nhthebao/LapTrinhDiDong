class Animal {
  protected makeSound(): void {
    console.log("Generic sound");
  }

  speak(): void {
    this.makeSound();
  }
}

class Dog extends Animal {
  protected makeSound(): void {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  protected makeSound(): void {
    console.log("Cat meows");
  }
}
