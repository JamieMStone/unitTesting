class Person {
    constructor (name, age){
        if (age < 0){
            throw new Error("age must be above 0");
        }
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello. I am ", this.name, "and I am ", this.age, " years old");
    }
}

module.exports = Person;