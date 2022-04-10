export default function play() {
  const name: string = "Alex";
  const age: number = 26;

  function logPersonInfo(personName: string, personAge: number) {
    // const info = "Name: " + personName + " Age: " + personAge;
    const info = `Name: ${personName}, Age: ${personAge}`;
    console.log(info);
    return info;
  }

  logPersonInfo(name, age);
}
