interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// };

export default function play() {
  const name: string = "Alex";
  const age: number = 26;

  const person = {
    name: "Kenny",
    age: 5,
  };

  function logPersonInfo(personName: string, personAge: number) {
    // const info = "Name: " + personName + " Age: " + personAge;
    const info = `Name: ${personName}, Age: ${personAge}`;
    console.log(info);
    return info;
  }

  function logPersonInfo2(person: Person) {
    // const info = "Name: " + personName + " Age: " + personAge;
    const info = `Name: ${person.name}, Age: ${person.age}`;
    console.log(info);
    return info;
  }

  logPersonInfo(name, age);
  logPersonInfo2(person);
}
