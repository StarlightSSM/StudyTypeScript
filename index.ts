let age:number = 30;
let isAdult:boolean = true;

let a:number[] = [1, 2, 3];
let a2:Array<number> = [1,2,3];

let animal:string[] = ['dog', 'cat', 'bird'];
let animals:Array<string> = ['dog', 'cat', 'bird'];

console.log(age);
console.log(isAdult);
console.log(a);
console.log(a2);
console.log(animal);
console.log(animals);

let k:[number, string];
k = [18, "highschoolStudent"];
// a = ["highschoolStudent", 18]; 튜플에 값을 대입할 때, 순서를 지켜야 한다.

console.log(k);
// 튜플 접근 방법
k[1].toUpperCase();
// a[0].toUpperCase(); 숫자에는 문자 관련 함수를 적용할 수 없다.

console.log(k[1]);

enum School {
    principle = 1,
    teacher,
    student,
    stu_parents
}

enum School1 {
    principle = 2,
    teacher,
    student,
    stu_parents
}

enum School2 {
    principle = 2,
    teacher = 5,
    student,
    stu_parents
}

enum School3 {
    principle = "교장",
    teacher = "선생님",
    student = "학생",
    stu_parents = "학부모"
}

// javascript 값이 1만큼 할당, 증가된다.
console.log(School);
console.log(School1);
console.log(School2);
console.log(School3);

type PetTypes = 'dog' | 'cat' | 'bird' | 'snake';

interface Pet {
    name: string;
    age: number;
    petType: PetTypes;
    readonly gender: string;
    weight?: number;
    [key: string]: PetTypes | string | number | undefined;
}

let dog: Pet = {
    name: 'suzy',
    age: 8,
    petType: 'dog',
    gender: 'female'
};

console.log(dog);

interface Mul {
    (num1:number, num2:number) : number;
}

const mul : Mul = function(a, b) {
    return a * b;
}

mul(20, 50);

interface IsComputer {
    (name: string): boolean;
}

const n: IsComputer = (name) => {
    return name === "computer";
}

console.log(n("computer")); // true
console.log(n("laptop")); // false

interface Pet2 {
    petType : string,
    age : number,
    sound(): void;
}

class myPet implements Pet2 {
    petType;
    age = 7;
    constructor (p:string) {
        this.petType = p;
    }
    sound() {
         console.log("warf! warf!!");
    }
}

const suzi = new myPet('dog');
console.log(suzi);
suzi.sound();

interface Feed {
    food: boolean,
    water: boolean
}

interface MyPet extends Pet2, Feed {
    name: string;
}