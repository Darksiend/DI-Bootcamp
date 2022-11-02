//Ex5

class Dog {
  constructor(name) {
    this.name = name;
  }
}

//3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
}
