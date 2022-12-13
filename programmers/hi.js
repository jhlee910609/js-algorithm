const obj = {
  name: "name",
  getName() {
    return this.name;
  },
};

function show(callback) {
  console.log(callback());
}

show(obj.getName.bind(obj));
