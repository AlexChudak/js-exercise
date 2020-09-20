class User {
  constructor(name, age, followers) {
    console.log('Выполняеться конструктор');
    console.log(this);

    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    return ` User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
  }

  name() {
    return this.name;
  }

  name(newName) {
    this.name = newName;
  }

  age() {
    return this.age;
  }

  age(newAge) {
    this.age = newAge;
  }

  followers() {
    return this.followers;
  }
  followers(newFollowers) {
    this.followers = newFollowers;
  }
}

console.log(typeof User);
// 'function'

const mango = new User('Mango', 2, 20);
console.log(mango.getInfo());
// 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo);
// 'function'

// const poly = new User( 'Poly', 3, 17);
// console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'
