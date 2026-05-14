const Dog = new Animal("Bingo")
// ReferenceError: Cannot access 'Animal' before initialization

class Animal {
  constructor(name) {
    this.name = name
  }
}