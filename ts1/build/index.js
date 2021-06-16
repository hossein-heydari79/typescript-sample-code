var MONTHS;
(function (MONTHS) {
    MONTHS[MONTHS["FARVARDIN"] = 1] = "FARVARDIN";
    MONTHS[MONTHS["ORDIBEHESHT"] = 2] = "ORDIBEHESHT";
    MONTHS[MONTHS["KHORDAD"] = 3] = "KHORDAD";
    MONTHS[MONTHS["TIR"] = 4] = "TIR";
    MONTHS[MONTHS["MORDAD"] = 5] = "MORDAD";
    MONTHS[MONTHS["SHAHRIVAR"] = 6] = "SHAHRIVAR";
    MONTHS[MONTHS["MEHR"] = 7] = "MEHR";
    MONTHS[MONTHS["ABAN"] = 8] = "ABAN";
    MONTHS[MONTHS["AZAR"] = 9] = "AZAR";
    MONTHS[MONTHS["DEY"] = 10] = "DEY";
    MONTHS[MONTHS["BAHMAN"] = 11] = "BAHMAN";
    MONTHS[MONTHS["ESFAND"] = 12] = "ESFAND";
})(MONTHS || (MONTHS = {}));
var abbasBoazar = {
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
    speak: function (text) {
        console.log("he says: ", text);
    },
    birth_month: MONTHS.KHORDAD
};
var babaLengDeraz = {
    name: "baba",
    family: "lengDeraz",
    age: 85,
    gender: true,
    isAlive: false,
    address: [{ city: "tehran", country: "iran" }],
    speak: function (text) {
        console.log("he says: ", text);
    }
};
var kolahGermezi = {
    name: "kolah",
    family: "ghermezi",
    age: 8,
    gender: true,
    grade: 6,
    address: [
        {
            city: "tehra",
            country: "iran",
            street: "azadi"
        },
    ],
    isAlive: true,
    speak: function (text) {
        console.log("he says: ", text);
    },
    sayHello: function () {
        console.log("Hello");
    }
};
function add(num1, num2) {
    return "" + (num1 + num2);
}
function humanGenerator(name, family, age, gender, address) {
    return {
        name: name,
        family: family,
        age: age,
        gender: gender,
        address: address,
        isAlive: true,
        speak: function (text) {
            console.log("he says: ", text);
        }
    };
}
var adam = humanGenerator("kolah", "ghermezi", 8, true);
var DAYS;
(function (DAYS) {
    DAYS[DAYS["SHANBE"] = 0] = "SHANBE";
    DAYS[DAYS["YEK_SHANBE"] = 1] = "YEK_SHANBE";
    DAYS[DAYS["DO_SHANBE"] = 2] = "DO_SHANBE";
    DAYS[DAYS["SE_SHANBE"] = 3] = "SE_SHANBE";
    DAYS[DAYS["CHAHAR_SHANBE"] = 4] = "CHAHAR_SHANBE";
    DAYS[DAYS["PANJ_SHANBE"] = 5] = "PANJ_SHANBE";
    DAYS[DAYS["JOME"] = 6] = "JOME";
})(DAYS || (DAYS = {}));
var FOODS = [
    "pizza",
    "gheyme",
    "omlete",
    "ghorme sabzi",
    "spagetti",
    "kebab mahi",
    "kobideh ba ab limo",
];
function dietGenerator() {
    var totalDiet = [];
    for (var day in DAYS) {
        var rndInt = Math.floor(Math.random() * 6) + 1;
        if (!isNaN(Number(day))) {
            totalDiet.push({ day: DAYS[+day], food: FOODS[rndInt] });
        }
    }
    return totalDiet;
}
var kv1 = {
    key: 1,
    value: "Steve",
    add: function (arg0, arg1) {
        return arg0 + arg1;
    }
};
//# sourceMappingURL=index.js.map