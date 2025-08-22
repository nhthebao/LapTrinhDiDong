class Student {
  constructor(public name: string) {}
}

class Teacher {
  constructor(public name: string) {}
}

class School {
  private students: Student[] = [];
  private teachers: Teacher[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  displayInfo(): void {
    console.log("Students:");
    this.students.forEach(s => console.log(s.name));

    console.log("Teachers:");
    this.teachers.forEach(t => console.log(t.name));
  }
}
