// let student1 = {
//   name: "Nguyen Van A",
//   class: "ReactJS",
//   mark: 10,
//   exam: function () {
//     console.log(this.name + " is examing...");
//   },
// };

class Student {
  constructor(name, className, mark) {
    this.name = name;
    this.class = className;
    this.mark = mark;
    this.exam = this.exam.bind(this);
  }
  exam = function (subject) {
    console.log(this.name + " is examing..." + subject);
  }; //.bind(this);

  study = () => {
    console.log(this.name + " is studying...");
  };
  // study = function() {
  //   console.log(this.name + " is studying...");
  // }.bind(this)
}

let aStudent = new Student("Nguyen Van B", "ReactJS", 8);
let aStudent2 = new Student("Nguyen Van C", "ReactJS", 8);
// aStudent.exam("Math");
// aStudent2.exam("Music");
// aStudent.study();
// aStudent2.study();

// aStudent.name = "Nguyen Van B";
// console.log(aStudent, aStudent2);

// function call(cb) {
//   cb("Math");
// }
// aStudent.exam("Math");
// call(aStudent.exam.bind(aStudent));
// name = "Global";
let exam = aStudent.exam;
let study = aStudent.study;
// console.log(exam);
exam("Math");
study();

// function hello() {
//   console.log("hello");
// }
// let hello2 = hello();
// hello2();

// inheritance

class Person {
  constructor(name) {
    this.name = name;
  }
  go() {
    console.log(this.name + " is going");
  }
}

class Doctor extends Person {
  constructor(name, subject, type) {
    super(name);
    this.subject = subject;
    this.type = type;
  }
  // override
  go() {
    console.log(`${this.name}(${this.subject}) is going`);
  }
}

class Teacher extends Person {
  constructor(name, classNames) {
    super(name);
    this.classNames = classNames;
  }
}

let doctor1 = new Doctor("Doctor 1", "Dentist", "Inner");
let teacher1 = new Teacher("Teacher 1", "ReactJS");
doctor1.go();
teacher1.go();
