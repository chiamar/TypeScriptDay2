let arr: Array<Person2> = [];

interface person{
  name: string;
  age: number;
  jobTitle: string;
}

class Person2 implements person {
  constructor(public name: string, public age: number, public jobTitle: string) {
    arr.push(this)
  }
    returnString() {
      return `Hello there, my name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}.`
  }
}

new Person2 ("Jane Doe", 33, "Financial Officer");


class Employee extends Person2 {
  //you have to define type for the parent properties as well!
  constructor(name: string, age: number, jobTitle: string, public salary: number, public jobLocation: string)
  {
    super(name, age, jobTitle)
    arr.push(this);
  }
  returnString() {
    return `${super.returnString()} I earn ${this.salary} every month and work in ${this.jobLocation} right now.` 
  }
}

new Employee ("Stefan Teaca", 22, "JS Engineer", 4000, "Vienna");

for(let val of arr) {
  console.log(val.returnString())
}