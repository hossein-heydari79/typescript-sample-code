var obj = {
    name: "hossein",
    family: "heydari",
    age: 22,
    married: false,
    address: ["iran", "tehran"],
    dars: {
        zaban: 0
    },
    say: function (txt) {
        console.log(txt);
    }
};
obj.say("wooooooooww");
var days;
(function (days) {
    days[days["shanbe"] = 1] = "shanbe";
    days[days["yek"] = 2] = "yek";
    days[days["do"] = 3] = "do";
    days[days["se"] = 4] = "se";
    days[days["ch"] = 5] = "ch";
    days[days["p"] = 6] = "p";
    days[days["j"] = 7] = "j";
})(days || (days = {}));
console.log(days["shanbe"]);
var x = {
    x: "hossein",
    y: 22
};
var y = {
    name: "abbas",
    family: "boAzar",
    age: 33,
    gender: true,
    address: [
        {
            city: "qom",
            country: "iran",
            street: "haram"
        },
    ],
    phone: {
        mobile: 912000002344,
        home: 9822334455
    },
    grade: "BC",
    isAlive: true,
    others: ["skdf", 2349, { age: 22 }]
};
console.log(y);
function person(name, family, children, country, state) {
    return {
        name: name,
        family: family,
        children: children,
        address: {
            country: country,
            state: state
        },
        sayhello: function () {
            return "hello";
        }
    };
}
var one = person("hossein", "heydari", ["sara", "amir"], "iran", "tehran");
console.log(one.sayhello());
var Days;
(function (Days) {
    Days[Days["shanbe"] = 1] = "shanbe";
    Days[Days["yekshanbe"] = 2] = "yekshanbe";
    Days[Days["doshanbe"] = 3] = "doshanbe";
    Days[Days["seshanve"] = 4] = "seshanve";
    Days[Days["chaharshanbe"] = 5] = "chaharshanbe";
    Days[Days["panjshanbe"] = 6] = "panjshanbe";
    Days[Days["jome"] = 7] = "jome";
})(Days || (Days = {}));
var food;
(function (food) {
    food[food["kabab"] = 1] = "kabab";
    food[food["joje"] = 2] = "joje";
    food[food["gheime"] = 3] = "gheime";
    food[food["makaroni"] = 4] = "makaroni";
    food[food["chenje"] = 5] = "chenje";
    food[food["felafel"] = 6] = "felafel";
    food[food["sibzamini"] = 7] = "sibzamini";
    food[food["file"] = 8] = "file";
    food[food["ghorme"] = 9] = "ghorme";
    food[food["ash"] = 10] = "ash";
})(food || (food = {}));
function get() {
    var _a;
    return {
        day: [
            (_a = {},
                _a[Days[1]] = "" + food[Math.floor(Math.random() * (10 - 1 + 1)) + 1],
                _a[Days[2]] = "" + food[Math.floor(Math.random() * (10 - 1 + 1)) + 1],
                _a[Days[3]] = "" + food[Math.floor(Math.random() * (10 - 1 + 1)) + 1],
                _a[Days[4]] = "" + food[Math.floor(Math.random() * (10 - 1 + 1)) + 1],
                _a[Days[5]] = "" + food[Math.floor(Math.random() * (10 - 1 + 1)) + 1],
                _a[Days[6]] = "" + food[Math.floor(Math.random() * (10 - 1 + 1)) + 1],
                _a[Days[7]] = "" + food[Math.floor(Math.random() * (10 - 1 + 1)) + 1],
                _a),
        ]
    };
}
console.log(get().day);
//# sourceMappingURL=main.js.map