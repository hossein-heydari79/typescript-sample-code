enum MONTHS {
  FARVARDIN = 1,
  ORDIBEHESHT,
  KHORDAD,
  TIR,
  MORDAD,
  SHAHRIVAR,
  MEHR,
  ABAN,
  AZAR,
  DEY,
  BAHMAN,
  ESFAND,
}

let abbasBoazar: IHuman = {
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
  speak: (text) => {
    console.log("he says: ", text);
  },
  birth_month: MONTHS.KHORDAD,
};

let babaLengDeraz: IHuman = {
  name: "baba",
  family: "lengDeraz",
  age: 85,
  gender: true,
  isAlive: false,
  address: [{ city: "tehran", country: "iran" }],
  speak: (text) => {
    console.log("he says: ", text);
  },
};

let kolahGermezi: IHuman = {
  name: "kolah",
  family: "ghermezi",
  age: 8,
  gender: true,
  grade: 6,
  address: [
    {
      city: "tehra",
      country: "iran",
      street: "azadi",
    },
  ],
  isAlive: true,
  speak: (text) => {
    console.log("he says: ", text);
  },
  sayHello: () => {
    console.log("Hello");
  },
};

interface IHuman {
  name: string;
  family: string;
  age: number;
  gender: boolean;
  address?: IAddress[];
  phone?: IPhone;
  grade?: string | number;
  isAlive: boolean;
  speak: (text: string) => void;
  sayHello?: () => void;
  birth_month?: MONTHS;
}

interface IAddress {
  country: string;
  city: string;
  street?: string;
}

interface IPhone {
  mobile: number;
  home: number;
}

function add(num1: number, num2: number): string {
  return `${num1 + num2}`;
}

function humanGenerator(
  name: string,
  family: string,
  age: number,
  gender: boolean,
  address?: IAddress[]
): IHuman {
  return {
    name,
    family,
    age,
    gender,
    address,
    isAlive: true,
    speak: (text) => {
      console.log("he says: ", text);
    },
  };
}

let adam = humanGenerator("kolah", "ghermezi", 8, true);

enum DAYS {
  SHANBE,
  YEK_SHANBE,
  DO_SHANBE,
  SE_SHANBE,
  CHAHAR_SHANBE,
  PANJ_SHANBE,
  JOME,
}

const FOODS = [
  "pizza",
  "gheyme",
  "omlete",
  "ghorme sabzi",
  "spagetti",
  "kebab mahi",
  "kobideh ba ab limo",
];

interface IDiet {
  day: string;
  food: string;
}

function dietGenerator(): IDiet[] {
  let totalDiet: IDiet[] = [];
  for (let day in DAYS) {
    const rndInt = Math.floor(Math.random() * 6) + 1;
    if (!isNaN(Number(day))) {
      totalDiet.push({ day: DAYS[+day], food: FOODS[rndInt] });
    }
  }
  return totalDiet;
}

// console.log(dietGenerator());

interface KeyPair<T, U, Y> {
  key: T;
  value: U;
  add: (arg0: T, arg1: U) => Y;
  age?: number;
  address?: string;
}

let kv1: KeyPair<number, string, string> = {
  key: 1,
  value: "Steve",
  add: (arg0, arg1) => {
    return arg0 + arg1;
  },
};
