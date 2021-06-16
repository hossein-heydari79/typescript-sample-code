var color = "Red";
var names = [12, "ali", {}];
var personInformation = {
    fullName: "Alichatraei",
    age: 20,
    sayHello: function (name) {
        return "Hello " + name;
    }
};
var greeting;
greeting = function (name1) { return "Hello " + name1; };
var RGB = [230, 220, 120], RGBA = [220, 220, 220, 0.4];
var Season;
(function (Season) {
    Season[Season["spring"] = 0] = "spring";
    Season[Season["summer"] = 1] = "summer";
    Season[Season["fall"] = 2] = "fall";
    Season[Season["winter"] = 3] = "winter";
})(Season || (Season = {}));
var anyTypeExample = { name: "ali" };
function sayHello(fullName) {
    console.log("Hello dear " + fullName);
}
function showError(message) {
    throw new Error(message);
    while (true) {
        console.log("hello");
    }
}
var unionTypeExample = 12;
function combineAndSum(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    if (typeof a === "string" && typeof b === "string")
        return a.concat(b);
    throw new Error("Parameters are not valid");
}
var a = 12;
var mouseEvent = "click";
var combinString = function (x, y) {
    return x.concat(y);
};
function sumOptionalParametersExample(x, y, z) {
    if (z === void 0) { z = 0; }
    return x + y + z;
}
function sumRestparametersExample() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    numbers.forEach(function (number) { return (sum += number); });
    return sum;
}
//# sourceMappingURL=index.js.map