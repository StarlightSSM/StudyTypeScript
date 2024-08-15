const userName1 = "Minji";
let userName2: string | number = "Sumin";
userName2 = 4;

type Job = "student" | "teacher" | "developer";

interface User {
    name: string;
    job: Job;
}

const user: User = {
    name: "Sumin",
    job: "student"
};

interface Animals {
    name: string | number;
    animal: 'dog' | 'cat' | 'cow' | 'bird' | 'pig';
}

interface Pet {
    name: "pet";
    age: number;
    sound(): void;
}

interface Cattle {
    name: "cattle";
    age: number;
    noise(): void;
}

function getAnimals(animal: Pet | Cattle) {
    console.log(animal.age);
    if (animal.name === "pet") {
        animal.sound();
    } else {
        animal.noise();
    }
}

interface Pet2 {
    name: string;
    sound(): void;
}

interface Cattle2 {
    name: string;
    age: number;
    color: string;
}

const cattlePet: Pet2 & Cattle2 = {
    name: "stanley",
    sound() {},
    color: "black and white",
    age: 5,
};

function hello(name?: string) {
    return `Hello, my name is ${name || "there"}`;
}

function hello2(name = "there") {
    return `Hello, ${name}`;
}

const result1 = hello();
const result2 = hello("Sumin");
//const result3 = hello(123456); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

function hello3(grade: number | undefined, name: string): string {
    if (grade !== undefined) {
        return `Hello, ${name}, You are in the ${grade}th grade.`;
    } else {
        return `Hello, ${name}`;
    }
}

console.log(hello3(4, "Sumin"));
console.log(hello3(undefined, "Sumin"));

// Function with array parameter
function sum(...odds: number[]) {
    return odds.reduce((result, num) => result + num, 0);
}

console.log(sum(1, 3, 5)); // 9
console.log(sum(1, 3, 5, 7, 9)); // 25

// Using `this` type
interface Pet {
    name: string;
}

const Suzi: Pet = { name: 'Suzi' };

function callPet(this: Pet, age: number, feed: 'food' | 'water') {
    console.log(this.name, age, feed);
}

const p = callPet.bind(Suzi);
p(7, 'water');

function adopt(name: string, age: string): string;
function adopt(name: string, age: number): Pet;
function adopt(name: string, age: number | string): Pet | string {
    if (typeof age === "number") {
        return { name, age };
    } else {
        return "Please enter the age as a number.";
    }
}

const kate = adopt("Kate", 2) as Pet;
const steve = adopt("Steve", "1") as string;

const watch = {
    name: "Watch",
};

const eat = {
    name: "Eat",
};

function action(this: { name: string }) {
    console.log(this.name);
}

function updateAct(this: any, hear: string, sleep: string) {
    this.hear = hear;
    this.sleep = sleep;
}

updateAct.call(watch, "hear something", "sleep soundly");
console.log(watch);

updateAct.call(eat, "hear nothing", "sleep lightly");
console.log(eat);

updateAct.apply(watch, ["hear a bell", "sleep restlessly"]);
console.log(watch);

updateAct.apply(eat, ["hear a whisper", "sleep deeply"]);
console.log(eat);

// Finding the minimum and maximum numbers
const evens = [2, 4, 6, 8, 10];
const minNum = Math.min(...evens);
const maxNum = Math.max(...evens);

console.log(minNum); // 2
console.log(maxNum); // 10

const evens2 = [2, 4, 6, 8, 10];
const minNum2 = Math.min.apply(null, evens2);
const maxNum2 = Math.max.apply(null, evens2);

console.log(minNum2); // 2
console.log(maxNum2); // 10

const evens3 = [2, 4, 6, 8, 10];
const minNum3 = Math.min.apply(null, evens3);
const maxNum3 = Math.max.call(null, ...evens3);

console.log(minNum3); // 2
console.log(maxNum3); // 10

const user2 = {
    name: "Sumin",
    callName: function () {
        console.log(`Hello, ${this.name}`);
    }
};

user2.callName();

let fn = user2.callName;

fn.call(user2);
fn.apply(user2);

let useBindFn = fn.bind(user2);

useBindFn();

const user3 = {
    name: "Sumin",
    callName: function () {
        return () => {
            console.log(`Hello, ${this.name}`);
        };
    }
};

user3.callName()();