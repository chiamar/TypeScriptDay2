"use strict";
let arr = [];
class Person2 {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
        arr.push(this);
    }
    returnString() {
        return `Hello there, my name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}.`;
    }
}
new Person2("John Doe", 30, "Engineer");
new Person2("Jane Doe", 25, "Quality Control Officer");
for (let val of arr) {
    console.log(val.returnString());
}
