class Employee {
  constructor(public name: string) {}
}

class Manager extends Employee {
  manage(): void {
    console.log(`${this.name} is managing`);
  }
}

class Developer extends Employee {
  code(): void {
    console.log(`${this.name} is coding`);
  }
}
