// 접근 제한자(Access Modifier) - public, private, protected
/*
public - 자식 클래스, 클래스 인스턴스 모두 접근 가능
protected - 자식 클래스에서 접근 가능
private - 해당 클래스 내부에서만 접근 가능
*/
class Car {
    name: string = "car"; // name has a default value "car"
    color: string;
    static wheels = 4;

    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }

    start() {
        console.log("start");
        console.log(this.name);
        console.log(Car.wheels);
    }
}

class Honda extends Car {
    constructor(color: string, name: string) {
        super(color, name);
    }

    showName() {
        console.log(this.name);
    }
}

const nx2 = new Honda("white", "nxxx2");
console.log(nx2.name);
console.log(Car.wheels);

// Abstract class
abstract class Car2 {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    start() {
        console.log("start");
    }

    abstract doSomething(): void;
}

class Kia extends Car2 {
    constructor(color: string) {
        super(color);
    }

    doSomething() {
        console.log(3);
    }
}

const k9 = new Kia("white");

// Generics
function getSize<T>(arr: T[]): number {
    return arr.length;
}

const arr1 = [1, 2, 3];
console.log(getSize<number>(arr1)); // 3

const arr2 = ["a", "b", "c"];
console.log(getSize<string>(arr2)); // 3

const arr3 = [false, true, true];
console.log(getSize(arr3)); // 3

const arr4 = [{}, {}, { name: "Steve" }];
console.log(getSize(arr4)); // 3

// Interface with Generics
interface Pet<T> {
    name: string;
    age: number;
    option: T;
}

const p1: Pet<{ color: string; isDog: boolean }> = {
    name: "Judy",
    age: 1,
    option: {
        color: "black",
        isDog: false,
    },
};

const p2: Pet<string> = {
    name: "Sam",
    age: 5,
    option: "Malteese",
};

interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
}

const user: User = { id: 1, name: "s", age: 10, gender: "m" };

interface CarInfo {
    name: string;
    color: string;
}

const car: CarInfo = { name: "Honda", color: "white" };

interface Book {
    name: string;
    price: number;
}

const book: Book = { name: "The Lemon Tree", price: 12000 };

function showNameInfo<T extends { name: string }>(data: T): string {
    return data.name;
}

console.log(showNameInfo(user));
console.log(showNameInfo(car));
console.log(showNameInfo(book));

// Utility Types
type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

let admin: Partial<User> = {
    id: 1,
    name: "Sam",
};

// Required<T>
interface User2 {
    id: number;
    name: string;
    age?: number;
}

let admin2: Required<User2> = {
    id: 1,
    name: "Sumin",
    age: 25,
};

// Readonly<T>
interface User3 {
    id: number;
    name: string;
    age?: number;
}

let admin3: Readonly<User3> = {
    id: 1,
    name: "Ssm",
};

// admin3.id = 4; // Error: Cannot assign to 'id' because it is a read-only property

// Record<K, T>
interface User4 {
    id: number;
    name: string;
    age: number;
}

function isValid(user: User4) {
    const result: Record<keyof User4, boolean> = {
        id: user.id > 0,
        name: user.name !== "",
        age: user.age > 0,
    };
    return result;
}

// Pick<T, K>
interface User5 {
    id: number;
    name: string;
    age: number;
    gender: "M" | "W";
}

const admin5: Pick<User5, "id" | "name"> = {
    id: 0,
    name: "sumin",
};

// Omit<T, K>
interface User6 {
    id: number;
    name: string;
    age: number;
    gender: "M" | "W";
}

const admin6: Omit<User6, "age" | "gender"> = {
    id: 0,
    name: "sumin",
};

// Exclude<T1, T2>
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

// NonNullable<Type>
type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>;
