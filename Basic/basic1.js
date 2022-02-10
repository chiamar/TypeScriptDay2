"use strict";
let persons = [];
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
        persons.push(this);
    }
    returnString() {
        return `Hello there, my name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}.`;
    }
}
new Person("John Doe", 30, "Software Engineer");
new Person("Jane Doe", 25, "Quality Control Manager");
new Person("Jill Doe", 28, "Human Resources Manager");
for (let val of persons) {
    console.log(val.returnString());
}
