let obj: t = {
  name: "hossein",
  family: "heydari",
  age: 22,
  married: false,
  address: ["iran", "tehran"],
  dars: {
    zaban: 0,
  },

  say(txt) {
    console.log(txt);
  },
};

interface t {
  name: string;
  family: string;
  age: number;
  married: boolean;
  address: string[];
  dars: {
    zaban: number;
  };
  say: func;
}

interface func {
  (text: string): void;
}

obj.say("wooooooooww");

// -----------------------------------------------------------

enum days {
  shanbe = 1,
  yek,
  do,
  se,
  ch,
  p,
  j,
}

console.log(days["shanbe"]);

let x: type<string, number> = {
  x: "hossein",
  y: 22,
};

interface type<T, U> {
  x: T;
  y: U;
}

// ------------------------------------------------------------

let y: T = {
  name: "abbas",
  family: "boAzar",
  age: 33,
  gender: true,
  address: [
    {
      city: "qom",
      country: "iran",
      street: "haram",
    },
  ],
  phone: {
    mobile: 912000002344,
    home: 9822334455,
  },
  grade: "BC",
  isAlive: true,
  others: ["skdf", 2349, { age: 22 }],
};

interface T {
  name: string;
  family: string;
  age: number;
  gender: boolean;
  address: obj[];
  phone: {
    mobile: number;
    home: number;
  };
  grade: string;
  isAlive: boolean;
  others: any[];
}

interface obj {
  city: string;
  country: string;
  street: string;
}

console.log(y);

// ----------------------------------------------------------

interface Ihumans {
  name: string;
  family: string;
  children: string[];
  address: {
    country: string;
    state: string;
  };

  sayhello: () => string;
}

function person(
  name: string,
  family: string,
  children: string[],
  country: string,
  state: string
): Ihumans {
  return {
    name,
    family,
    children,
    address: {
      country,
      state,
    },
    sayhello: function () {
      return "hello";
    },
  };
}

let one = person("hossein", "heydari", ["sara", "amir"], "iran", "tehran");
console.log(one.sayhello());

// ------------------------------------------------------------------------

enum Days {
  shanbe = 1,
  yekshanbe,
  doshanbe,
  seshanve,
  chaharshanbe,
  panjshanbe,
  jome,
}

enum food {
  kabab = 1,
  joje,
  gheime,
  makaroni,
  chenje,
  felafel,
  sibzamini,
  file,
  ghorme,
  ash,
}

function get(): program {
  return {
    day: [
      {
        [Days[1]]: `${food[Math.floor(Math.random() * (10 - 1 + 1)) + 1]}`,
        [Days[2]]: `${food[Math.floor(Math.random() * (10 - 1 + 1)) + 1]}`,
        [Days[3]]: `${food[Math.floor(Math.random() * (10 - 1 + 1)) + 1]}`,
        [Days[4]]: `${food[Math.floor(Math.random() * (10 - 1 + 1)) + 1]}`,
        [Days[5]]: `${food[Math.floor(Math.random() * (10 - 1 + 1)) + 1]}`,
        [Days[6]]: `${food[Math.floor(Math.random() * (10 - 1 + 1)) + 1]}`,
        [Days[7]]: `${food[Math.floor(Math.random() * (10 - 1 + 1)) + 1]}`,
      },
    ],
  };
}

interface program {
  day: object[];
}

console.log(get().day);
