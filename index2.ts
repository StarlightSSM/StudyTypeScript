interface User {
    name: string;
    job: "student" | "teacher" | "developer";
}

const user: User = {
    name: "Sumin",
    job: "student",
};

interface Animal {
    name: string | number;
    animal: 'dog' | 'cat' | 'cow' | 'bird' | 'pig';
}

interface PetInterface {
    name: "pet";
    age: number;
    sound(): void;
}

interface CattleInterface {
    name: "cattle";
    age: number;
    noise(): void;
}

function getAnimals(animal: PetInterface | CattleInterface) {
    console.log(animal.age);
    if (animal.name === "pet") {
        animal.sound();
    } else {
        animal.noise();
    }
}

interface Pet {
    name: string;
    sound(): void;
    petType: string; // Pet에 새로운 속성 추가
    gender: string;  // Pet에 새로운 속성 추가
}

interface Cattle {
    name: string;
    age: number;
    color: string;
}

const cattlePet: Pet & Cattle = {
    name: "stanley",
    sound() {},
    color: "black and white",
    age: 5,
    petType: "dog",   // petType 추가
    gender: "male",   // gender 추가
};

function hello(name?: string) {
    return `Hello, my name is ${name || "there"}`;
}

function hello2(name = "there") {
    return `Hello, ${name}`;
}

const result1 = hello();
const result2 = hello("Sumin");

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
interface MyPet {
    name: string;
}

const myPet2: MyPet = { name: 'suzi' };

function callPet(this: MyPet, age: number, feed: 'food' | 'water') {
    console.log(this.name, age, feed);
}

const p = callPet.bind(myPet2);
p(7, 'water');

interface MyPet2 {
    name: string;
}

interface MyPetWithAge extends MyPet2 {
    age: number;
}

function adopt(name: string, age: string): string;
function adopt(name: string, age: number): MyPetWithAge;
function adopt(name: string, age: number | string): MyPetWithAge | string {
    if (typeof age === "number") {
        return { name, age }; // Now this is valid because MyPet includes 'age'
    } else {
        return "Please enter the age as a number.";
    }
}

const kate = adopt("Kate", 2) as MyPet;
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
