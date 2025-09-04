abstract class Shape {
  abstract area(): number;
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  area(): number {
    return this.side ** 2;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
