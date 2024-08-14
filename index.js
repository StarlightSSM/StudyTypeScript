var age = 30;
var isAdult = true;
var a = [1, 2, 3];
var a2 = [1, 2, 3];
var animal = ['dog', 'cat', 'bird'];
var animals = ['dog', 'cat', 'bird'];
console.log(age);
console.log(isAdult);
console.log(a);
console.log(a2);
console.log(animal);
console.log(animals);
var k;
k = [18, "highschoolStudent"];
// a = ["highschoolStudent", 18]; 튜플에 값을 대입할 때, 순서를 지켜야 한다.
console.log(k);
// 튜플 접근 방법
k[1].toUpperCase();
// a[0].toUpperCase(); 숫자에는 문자 관련 함수를 적용할 수 없다.
console.log(k[1]);
var School;
(function (School) {
    School[School["principle"] = 1] = "principle";
    School[School["teacher"] = 2] = "teacher";
    School[School["student"] = 3] = "student";
    School[School["stu_parents"] = 4] = "stu_parents";
})(School || (School = {}));
var School1;
(function (School1) {
    School1[School1["principle"] = 2] = "principle";
    School1[School1["teacher"] = 3] = "teacher";
    School1[School1["student"] = 4] = "student";
    School1[School1["stu_parents"] = 5] = "stu_parents";
})(School1 || (School1 = {}));
var School2;
(function (School2) {
    School2[School2["principle"] = 2] = "principle";
    School2[School2["teacher"] = 5] = "teacher";
    School2[School2["student"] = 6] = "student";
    School2[School2["stu_parents"] = 7] = "stu_parents";
})(School2 || (School2 = {}));
var School3;
(function (School3) {
    School3["principle"] = "\uAD50\uC7A5";
    School3["teacher"] = "\uC120\uC0DD\uB2D8";
    School3["student"] = "\uD559\uC0DD";
    School3["stu_parents"] = "\uD559\uBD80\uBAA8";
})(School3 || (School3 = {}));
// javascript 값이 1만큼 할당, 증가된다.
console.log(School);
console.log(School1);
console.log(School2);
console.log(School3);
var dog = {
    name: 'suzy',
    age: 8,
    petType: 'dog',
    gender: 'female'
};
console.log(dog);
var mul = function (a, b) {
    return a * b;
};
mul(20, 50);
var n = function (name) {
    return name === "computer";
};
console.log(n("computer")); // true
console.log(n("laptop")); // false
var myPet = /** @class */ (function () {
    function myPet(p) {
        this.age = 7;
        this.petType = p;
    }
    myPet.prototype.sound = function () {
        console.log("warf! warf!!");
    };
    return myPet;
}());
var suzi = new myPet('dog');
console.log(suzi);
suzi.sound();
