import { Person } from "./Bai_1";

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  displayAllInfo(): void {
    super.displayInfo();
    console.log(`Grade: ${this.grade}`);
  }
}
