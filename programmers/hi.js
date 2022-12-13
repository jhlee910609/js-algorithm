const obj = {
  name: "name",
  getName() {
    return this.name;
  },
};

function show(callback) {
  console.log(callback());
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

console.log(new Person("hi", 12));

show(obj.getName.bind(obj));
