var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
var user = {
    name: "Sumin",
    job: "student",
};
function getAnimals(animal) {
    console.log(animal.age);
    if (animal.name === "pet") {
        animal.sound();
    }
    else {
        animal.noise();
    }
}
var cattlePet = {
    name: "stanley",
    sound: function () { },
    color: "black and white",
    age: 5,
    petType: "dog", // petType 추가
    gender: "male", // gender 추가
};
function hello(name) {
    return "Hello, my name is ".concat(name || "there");
}
function hello2(name) {
    if (name === void 0) { name = "there"; }
    return "Hello, ".concat(name);
}
var result1 = hello();
var result2 = hello("Sumin");
function hello3(grade, name) {
    if (grade !== undefined) {
        return "Hello, ".concat(name, ", You are in the ").concat(grade, "th grade.");
    }
    else {
        return "Hello, ".concat(name);
    }
}
console.log(hello3(4, "Sumin"));
console.log(hello3(undefined, "Sumin"));
// Function with array parameter
function sum() {
    var odds = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        odds[_i] = arguments[_i];
    }
    return odds.reduce(function (result, num) { return result + num; }, 0);
}
console.log(sum(1, 3, 5)); // 9
console.log(sum(1, 3, 5, 7, 9)); // 25
var myPet2 = { name: 'suzi' };
function callPet(age, feed) {
    console.log(this.name, age, feed);
}
var p = callPet.bind(myPet2);
p(7, 'water');
function adopt(name, age) {
    if (typeof age === "number") {
        return { name: name, age: age }; // Now this is valid because MyPet includes 'age'
    }
    else {
        return "Please enter the age as a number.";
    }
}
var kate = adopt("Kate", 2);
var steve = adopt("Steve", "1");
var watch = {
    name: "Watch",
};
var eat = {
    name: "Eat",
};
function action() {
    console.log(this.name);
}
function updateAct(hear, sleep) {
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
var evens = [2, 4, 6, 8, 10];
var minNum = Math.min.apply(Math, evens);
var maxNum = Math.max.apply(Math, evens);
console.log(minNum); // 2
console.log(maxNum); // 10
var evens2 = [2, 4, 6, 8, 10];
var minNum2 = Math.min.apply(null, evens2);
var maxNum2 = Math.max.apply(null, evens2);
console.log(minNum2); // 2
console.log(maxNum2); // 10
var evens3 = [2, 4, 6, 8, 10];
var minNum3 = Math.min.apply(null, evens3);
var maxNum3 = (_a = Math.max).call.apply(_a, __spreadArray([null], evens3, false));
console.log(minNum3); // 2
console.log(maxNum3); // 10
var user2 = {
    name: "Sumin",
    callName: function () {
        console.log("Hello, ".concat(this.name));
    }
};
user2.callName();
var fn = user2.callName;
fn.call(user2);
fn.apply(user2);
var useBindFn = fn.bind(user2);
useBindFn();
var user3 = {
    name: "Sumin",
    callName: function () {
        var _this = this;
        return function () {
            console.log("Hello, ".concat(_this.name));
        };
    }
};
user3.callName()();
