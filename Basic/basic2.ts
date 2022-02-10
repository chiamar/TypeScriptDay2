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

new Person2(
  "John Doe",
  30,
  "Engineer"
)

new Person2(
  "Jane Doe",
  25,
  "Quality Control Officer"
)

for(let val of arr) {
  console.log(val.returnString())
}