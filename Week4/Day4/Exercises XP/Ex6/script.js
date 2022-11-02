//Ex6
class Animal {
  constructor(type, name, color) {
    this.type = type;
    this.name = name;
    this.color = color;
  }
  type;
  name;
  color;
}

class Mamal extends Animal {
  sound(sound) {
    console.log(
      `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
    );
  }
}

let farmerCow = new Mamal("cow", "Lily", "brown and white");
farmerCow.sound("Mooo");
