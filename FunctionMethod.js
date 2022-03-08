const person ={
    fname:"Akram",
    lname:"Khan",
    age:19,
    city:"Nanded",
    getName(){
        return `First Name :${this.fname} Last Name:${this.lname} Age${this.age} City${this.city} `
    }
}

// console.log(person.getName())

const person2 ={
    fname:"Akram",
    lname:"Dad",
    age:19,
    city:"Nanded",
}

console.log(person.getName.bind(person2)())
console.log()