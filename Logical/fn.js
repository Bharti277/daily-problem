const obj = {
  name: "JS",
  greet: function () {
    console.log(this.name);
  },
};

const greet = obj.greet;
greet();
