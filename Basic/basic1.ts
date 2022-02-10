let persons: Array<Person> = [];

interface pers{
  name: string;
  age: number;
  jobTitle: string;
}

class Person implements pers {
  constructor(public name: string, public age: number, public jobTitle: string) {
    persons.push(this)
  }
    returnString() {
      return `Hello there, my name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}.`
  }
}

new Person("John Doe", 30, "Software Engineer")
new Person("Jane Doe", 25, "Quality Control Manager")
new Person("Jill Doe", 28, "Human Resources Manager")

for(let val of persons) {
  console.log(val.returnString())
}